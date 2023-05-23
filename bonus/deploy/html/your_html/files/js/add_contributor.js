/*
** EPITECH PROJECT, 2022
** space-track-home (Workspace)
** File description:
** add_contributor.js
*/

function add_contributor(ID, name, social_link, social_name, more_info = "", icon_source_path = "../../../") {
    var contributor = "";
    document.getElementById(ID).innerHTML += "<div class='contributor'>";
    add_social_icon(ID, more_info, social_link, icon_source_path);
    contributor += name + " : ";
    contributor += "<a href = '" + social_link + "' target = '_blank' class='social_link'>";
    contributor += social_name;
    if (more_info != "") {
        contributor += " - (" + more_info + ")";
    }
    contributor += "</a>";
    contributor += "</div>";
    document.getElementById(ID).innerHTML += contributor;
}
