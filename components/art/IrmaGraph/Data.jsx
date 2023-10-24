import _5SecRule_jpg                         from "./5-sec-rule.jpg";
import coloursOfPomegranate_jpg              from "./colours-of-pomegranate.jpg";
import elsaVonFreytag_jpg                    from "./elsa-von-freytag.jpg";
import foodAltar_jpg                         from "./food-altar.jpg";
import holyOlgaBudapest_jpg                  from "./holy_olga_budapest.jpg";
import ImmaculateHeartOfMary_jpg             from "./Immaculate_Heart_of_Mary.jpg";
import irma1_jpg                             from "./irma-1.jpg";
import irmaJelenes1_jpg                      from "./irma-jelenes-1.jpg";
import irmaJelenes2_jpg                      from "./irma-jelenes-2.jpg";
import erikMatrai_jpg                        from "./erik-matrai.jpg";
import krumpli_jpg                           from "./krumpli.jpg";
import ladyGaga_jpg                          from "./lady-gaga.jpg";
import MattiaPretiSantaVeronicaConIlVelo_jpg from "./MattiaPreti-SantaVeronicaConIlVelo.jpg";
import monstrancia_jpg                       from "./monstrancia.jpg";
import sacredAndProfane_jpg                  from "./sacred-and-profane.jpg";
import sacredHeart_jpg                       from "./sacred-heart.jpg";
import skyspaceZumtobel_jpg                  from "./skyspace-zumtobel.jpg";
import window_jpg                            from "./window.jpg";

const main = "main";
const rect = "rect";
const text = "text";
const image = "image";
const empty = "empty";

const white = "white";
const cyan = "cyan";

var irmaGraphData = {
    nodes: [
        {
            id: "IRMA5SECONDS",
            group: main,
            img: irma1_jpg,
        },
        {
            id: "Profane",
            group: rect,
        },
        {
            id: "eating",
            group: text,
        },
        {
            id: "Profane/eating/dropping beats/5 seconds rule",
            group: text,
            text: "5 seconds rule"
        },
        {
            id: _5SecRule_jpg,
            group: image,
            img: _5SecRule_jpg,
            text: "fallen bites floor mosaic (Roman age)"
        },
        {
            id: "fallen morsels",
            group: text,
        },
        {
            id: "Profane/eating/fallen morsels/Altars",
            text: "Altars",
            group: rect
        },
        {
            id: foodAltar_jpg,
            text: "foodAltar_jpg",
            group: image,
            img: foodAltar_jpg,
        },
        {
            id: "sacred arts",
            group: text,
        },
        {
            id: irmaJelenes2_jpg,
            group: image,
            img: irmaJelenes2_jpg,
        },
        {
            id: "ca_sa_sa_pa_aa_ih",
            group: empty,
        },
        {
            id: "street art",
            group: text,
        },
        {
            id: "public art",
            group: text,
        },
        {
            id: "applied art",
            group: text,
        },
        {
            id: "installation history",
            group: text,
        },
        {
            id: "Contemporary Art",
            group: rect,
        },
        {
            id: "collective memory",
            group: text,
        },
        {
            id: "applied art/merchandise",
            group: text,
            text: "merchandise",
        },
        {
            id: "coloring book",
            group: text,
        },
        {
            id: "pins",
            group: text,
        },
        {
            id: "holy images",
            group: text,
        },
        {
            id: "ginger bread",
            group: text,
        },
        {
            id: "tablecloth",
            group: text,
        },
        {
            id: "design",
            group: text,
        },
        {
            id: "jewelleries",
            group: text,
        },
        {
            id: "style",
            group: text,
        },
        {
            id: "The sign in society",
            group: text,
        },
        {
            id: "webpage",
            group: text,
        },
        {
            id: "woven textile",
            group: text,
        },
        {
            id: "character",
            group: text,
        },
        {
            id: "altar",
            group: text,
        },
        {
            id: window_jpg,
            group: image,
            img: window_jpg,
        },
        {
            id: "James Turell",
            group: text,
        },
        {
            id: skyspaceZumtobel_jpg,
            group: image,
            img: skyspaceZumtobel_jpg,
        },
        {
            id: "Erik Mátrai",
            group: text,
        },
        {
            id: erikMatrai_jpg,
            group: image,
            img: erikMatrai_jpg,
        },
        {
            id: "Elsa von Freytag-Loringhoven",
            group: text,
        },
        {
            id: elsaVonFreytag_jpg,
            group: image,
            img: elsaVonFreytag_jpg,
        },
        {
            id: "János Sugár",
            group: text,
        },
        {
            id: monstrancia_jpg,
            group: image,
            img: monstrancia_jpg,
            text: "Monstrancia Modell: Narcissus in the black hole"
        },
        {
            id: "re_st_sd_hl",
            group: empty,
        },
        {
            id: "Religion",
            group: rect,
        },
        {
            id: "Saint",
            group: rect,
        },
        {
            id: "Sacred",
            group: rect,
        },
        {
            id: "Holy",
            group: rect,
        },
        {
            id: "baroque",
            group: text,
        },
        {
            id: "Religion/baroque/Altars",
            text: "Altars",
            group: rect
        },
        {
            id: "subtopic",
            group: text,
        },
        {
            id: irmaJelenes1_jpg,
            group: image,
            img: irmaJelenes1_jpg,
        },
        {
            id: sacredHeart_jpg,
            group: image,
            img: sacredHeart_jpg,
            text: "Sacred heart"
        },
        {
            id: "non ascetic",
            group: text,
        },
        {
            id: "space",
            group: text,
        },
        {
            id: "sacrificial place",
            group: text,
        },
        {
            id: "time",
            group: text,
        },
        {
            id: "5 seconds",
            group: text,
        },
        {
            id: "Saint/time/5 seconds/moment",
            group: text,
            text: "moment"
        },
        {
            id: "EMBODIMENT",
            group: text,
        },
        {
            id: ImmaculateHeartOfMary_jpg,
            group: image,
            img: ImmaculateHeartOfMary_jpg,
            text: "Iconography"
        },
        {
            id: sacredAndProfane_jpg,
            group: image,
            img: sacredAndProfane_jpg,
            text: "Mircea Eliade: Sacred and profane"
        },
        {
            id: coloursOfPomegranate_jpg,
            group: image,
            img: coloursOfPomegranate_jpg,
            text: "Sergei Parajanov: The Colour of Pomegranates"
        },
        {
            id: MattiaPretiSantaVeronicaConIlVelo_jpg,
            group: image,
            img: MattiaPretiSantaVeronicaConIlVelo_jpg,
            text: "veil of veronica"
        },
        {
            id: "Holy/merchandise",
            group: text,
            text: "merchandise",
        },
        {
            id: holyOlgaBudapest_jpg,
            group: image,
            img: holyOlgaBudapest_jpg,
            text: "Holy Olga"
        },
        {
            id: "holy shit",
            group: text,
        },
        {
            id: ladyGaga_jpg,
            group: image,
            img: ladyGaga_jpg,
            text: "Lady Gaga"
        },
        {
            id: krumpli_jpg,
            group: image,
            img: krumpli_jpg
        },
        {
            id: "Holy/holy shit/5 seconds rule",
            group: text,
            text: "5 seconds rule"
        },
        {
            id: "Holy/holy shit/5 seconds rule/moment",
            group: text,
            text: "moment"
        },
        {
            id: "Free Will",
            group: text,
        },
    ],
    links: [
        
        ////// Main links //////

        {
            source: "IRMA5SECONDS", target: "Profane",
            group: white
        },
        {
            source: "Profane", target: "eating",
            group: white,
        },
        {
            source: "eating", target: "Profane/eating/dropping beats/5 seconds rule",
            group: white,
            text: "dropping beats"
        },
        {
            source: "Profane/eating/dropping beats/5 seconds rule", target: _5SecRule_jpg,
            group: white
        },
        {
            source: "eating", target: "fallen morsels",
            group: white
        },
        {
            source: "fallen morsels", target: "Profane/eating/fallen morsels/Altars",
            group: white
        },
        {
            source: "Profane/eating/fallen morsels/Altars", target: foodAltar_jpg,
            group: white
        },
        {
            source: "Profane/eating/fallen morsels/Altars", target: "sacred arts",
            group: white
        },
        {
            source: "ca_sa_sa_pa_aa_ih", target: "sacred arts",
            group: white
        },
        {
            source: "ca_sa_sa_pa_aa_ih", target: "street art",
            group: white
        },
        {
            source: "ca_sa_sa_pa_aa_ih", target: "public art",
            group: white
        },
        {
            source: "ca_sa_sa_pa_aa_ih", target: "applied art",
            group: white
        },
        {
            source: "ca_sa_sa_pa_aa_ih", target: "installation history",
            group: white
        },
        {
            source: "street art", target: irmaJelenes2_jpg,
            group: white
        },
        {
            source: "sacred arts", target: irmaJelenes2_jpg,
            group: white
        },
        {
            source: "Contemporary Art", target: "ca_sa_sa_pa_aa_ih",
            group: white
        },
        {
            source: "IRMA5SECONDS", target: "Contemporary Art",
            group: white
        },
        {
            source: "public art", target: "collective memory",
            group: white
        },
        {
            source: "applied art", target: "applied art/merchandise",
            group: white
        },
        {
            source: "applied art/merchandise", target: "coloring book",
            group: white
        },
        {
            source: "applied art/merchandise", target: "pins",
            group: white
        },
        {
            source: "applied art/merchandise", target: "holy images",
            group: white
        },
        {
            source: "applied art/merchandise", target: "ginger bread",
            group: white
        },
        {
            source: "applied art/merchandise", target: "tablecloth",
            group: white
        },
        {
            source: "applied art", target: "design",
            group: white
        },
        {
            source: "design", target: "jewelleries",
            group: white
        },
        {
            source: "design", target: "style",
            group: white
        },
        {
            source: "design", target: "The sign in society",
            group: white
        },
        {
            source: "design", target: "webpage",
            group: white
        },
        {
            source: "design", target: "woven textile",
            group: white
        },
        {
            source: "design", target: "character",
            group: white
        },
        {
            source: "installation history", target: "altar",
            group: white
        },
        {
            source: "altar", target: window_jpg,
            group: white
        },
        {
            source: "installation history", target: "James Turell",
            group: white
        },
        {
            source: "James Turell", target: skyspaceZumtobel_jpg,
            group: white
        },
        {
            source: "installation history", target: "Erik Mátrai",
            group: white
        },
        {
            source: "Erik Mátrai", target: erikMatrai_jpg,
            group: white
        },
        {
            source: "installation history", target: "Elsa von Freytag-Loringhoven",
            group: white
        },
        {
            source: "Elsa von Freytag-Loringhoven", target: elsaVonFreytag_jpg,
            group: white
        },
        {
            source: "installation history", target: "János Sugár",
            group: white
        },
        {
            source: "János Sugár", target: monstrancia_jpg,
            group: white
        },
        {
            source: "IRMA5SECONDS", target: "re_st_sd_hl",
            group: white
        },
        {
            source: "re_st_sd_hl", target: "Religion",
            group: white
        },
        {
            source: "re_st_sd_hl", target: "Saint",
            group: white
        },
        {
            source: "re_st_sd_hl", target: "Sacred",
            group: white
        },
        {
            source: "re_st_sd_hl", target: "Holy",
            group: white
        },
        {
            source: "Religion", target: "baroque",
            group: white
        },
        {
            source: "baroque", target: "Religion/baroque/Altars",
            group: white
        },
        {
            source: "baroque", target: "subtopic",
            group: white
        },
        {
            source: "subtopic", target: irmaJelenes1_jpg,
            group: white
        },
        {
            source: "subtopic", target: sacredHeart_jpg,
            group: white
        },
        {
            source: "Religion", target: "non ascetic",
            group: white
        },
        {
            source: "Saint", target: "space",
            group: white
        },
        {
            source: "space", target: "sacrificial place",
            group: white
        },
        {
            source: "Saint", target: "time",
            group: white
        },
        {
            source: "time", target: "5 seconds",
            group: white
        },
        {
            source: "5 seconds", target: "Saint/time/5 seconds/moment",
            group: white
        },
        {
            source: "Saint", target: "EMBODIMENT",
            group: white
        },
        {
            source: "EMBODIMENT", target: ImmaculateHeartOfMary_jpg,
            group: white
        },
        {
            source: "Sacred", target: sacredAndProfane_jpg,
            group: white
        },
        {
            source: "Holy", target: coloursOfPomegranate_jpg,
            group: white
        },
        {
            source: "Holy", target: MattiaPretiSantaVeronicaConIlVelo_jpg,
            group: white
        },
        {
            source: "Holy", target: "Holy/merchandise",
            group: white
        },
        {
            source: "Holy/merchandise", target: holyOlgaBudapest_jpg,
            group: white
        },
        {
            source: "Holy", target: "holy shit",
            group: white
        },
        {
            source: "holy shit", target: ladyGaga_jpg,
            group: white
        },
        {
            source: "holy shit", target: krumpli_jpg,
            group: white
        },
        {
            source: "holy shit", target: "Holy/holy shit/5 seconds rule",
            group: white
        },
        {
            source: "Holy/holy shit/5 seconds rule", target: "Holy/holy shit/5 seconds rule/moment",
            group: white
        },
        {
            source: "Holy/holy shit/5 seconds rule", target: "Free Will",
            group: white
        },
        
        ////// Cyan links //////

        {
            source: "Profane/eating/dropping beats/5 seconds rule", target: "5 seconds",
            group: cyan,
            arrow: [true, true]
        },
        {
            source: _5SecRule_jpg, target: "fallen morsels",
            group: cyan,
            arrow: [true, true]
        },
        {
            source: "fallen morsels", target: "Holy",
            group: cyan,
            arrow: [true, true]
        },
        {
            source: "fallen morsels", target: krumpli_jpg,
            group: cyan,
            arrow: [true, true]
        },
        {
            source: "Profane/eating/fallen morsels/Altars", target: "Holy",
            group: cyan,
            arrow: [true, true]
        },
        {
            source: foodAltar_jpg, target: "non ascetic",
            group: cyan,
            arrow: [true, true]
        },
        {
            source: foodAltar_jpg, target: "Religion/baroque/Altars",
            group: cyan,
            arrow: [true, true]
        },
        {
            source: foodAltar_jpg, target: "Religion",
            group: cyan,
            arrow: [true, false]
        },
        {
            source: "sacred arts", target: MattiaPretiSantaVeronicaConIlVelo_jpg,
            group: cyan,
            arrow: [true, true]
        },
        {
            source: "holy images", target: sacredHeart_jpg,
            group: cyan,
            arrow: [true, true]
        },
        {
            source: "applied art/merchandise", target: ImmaculateHeartOfMary_jpg,
            group: cyan,
            arrow: [true, true]
        },
        {
            source: "jewelleries", target: "IRMA5SECONDS",
            group: cyan,
            arrow: [true, true],
            text: "correlation"
        },
        {
            source: "style", target: holyOlgaBudapest_jpg,
            group: cyan,
            arrow: [true, true]
        },
        {
            source: "style", target: coloursOfPomegranate_jpg,
            group: cyan,
            arrow: [true, true]
        },
        {
            source: "The sign in society", target: ladyGaga_jpg,
            group: cyan,
            arrow: [true, true]
        },
        {
            source: "woven textile", target: MattiaPretiSantaVeronicaConIlVelo_jpg,
            group: cyan,
            arrow: [true, true]
        },
        {
            source: "character", target: holyOlgaBudapest_jpg,
            group: cyan,
            arrow: [true, true]
        },
        {
            source: erikMatrai_jpg, target: "sacrificial place",
            group: cyan,
            arrow: [true, false]
        },
        {
            source: window_jpg, target: "Holy",
            group: cyan,
            arrow: [true, true]
        },
    ]
};

export default irmaGraphData;