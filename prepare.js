const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const glob = require('glob');
const mustache = require('mustache');
const constants = require("./content/js/Constants.js");

mustache.escape = t => t;

await glob(
    './templates/**/*', { absolute: false },
    (e, files) => {
        console.log("Preparing templated files");
        if(e !== null)
        {
            console.error(e);
            return;
        }
        files.forEach(f => {
            let rpath = ('./' + path.relative("./templates", f))
                .replaceAll('\\', '/');
            let template = fs.readFileSync(f).toString();
            console.log(rpath);
            let output = mustache.render(template, constants);
            fse.outputFileSync(rpath, output);
        });
    }
)

let template = fs.readFileSync('./social.sbnhtml').toString();

await glob(
    './content/**/*.md', { absolute: false },
    (e, files) => {
        console.log("Preparing social-media previews");
        if(e !== null)
        {
            console.error(e);
            return;
        }
        files.forEach(f => {
            let cpath = ('/c/' + path.relative("./content", f))
                .replaceAll('.md', '')
                .replaceAll('\\', '/');
            let tpath = './public' + cpath + '.html';
            let content = fs.readFileSync(f).toString();
            let metaRegex = /\<\!\-\-\s(?<meta>.*?)\s\-\-\>/gs;
            let metaResult = metaRegex.exec(content);
            if(metaResult !== null)
            {
                console.log(cpath);
                let model = {
                    ...constants,
                    ...JSON.parse(metaResult.groups.meta)
                };
                if(!('img' in model))
                {
                    model.img = "social_thumb.jpg";
                }
                if(!('title' in model))
                {
                    model.title = `${constants.globalTitle} / ${cpath}`;
                }
                model.path = cpath;
                let output = mustache.render(template, model);
                fse.outputFileSync(tpath, output);
            }
        })
    }
);