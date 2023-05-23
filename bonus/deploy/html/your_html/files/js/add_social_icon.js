/*
** EPITECH PROJECT, 2022
** space-track-home (Workspace)
** File description:
** add_social_icon.js
*/

function add_social_icon(ID, media_name, social_link, icon_source_path = "../../../") {
    var social_icon = "";
    var theme = currentTheme = readCookie("theme").toUpperCase();
    if (theme === "L") {
        theme = "b";
    } else {
        theme = "w";
    }
    var icon_list = {
        "Behance": `${icon_source_path}/files/img/follow_me/behance/behance_${theme}.png`,
        "Codepen": `${icon_source_path}/files/img/follow_me/codepen/codepen_${theme}.png`,
        "Dev-to": `${icon_source_path}/files/img/follow_me/dev-to/dev-to_${theme}.png`,
        "Discord": `${icon_source_path}/files/img/follow_me/discord/discord_${theme}.png`,
        "Facebook": `${icon_source_path}/files/img/follow_me/facebook/facebook_${theme}.png`,
        "Github": `${icon_source_path}/files/img/follow_me/github/github_${theme}.png`,
        "Instagram": `${icon_source_path}/files/img/follow_me/instagram/instagram_${theme}.png`,
        "Linkedin": `${icon_source_path}/files/img/follow_me/linkedin/linkedin_${theme}.png`,
        "Patreon": `${icon_source_path}/files/img/follow_me/patreon/patreon_${theme}.png`,
        "Pinterest": `${icon_source_path}/files/img/follow_me/pinterest/pinterest_${theme}.png`,
        "Reddit": `${icon_source_path}/files/img/follow_me/reddit/reddit_${theme}.png`,
        "Repl.it": `${icon_source_path}/files/img/follow_me/repl_it/repl_it_${theme}.png`,
        "Snapchat": `${icon_source_path}/files/img/follow_me/snapchat/snapchat_${theme}.png`,
        "SoundCloud": `${icon_source_path}/files/img/follow_me/soundcloud/soundcloud_${theme}.png`,
        "Spotify": `${icon_source_path}/files/img/follow_me/spotify/spotify_${theme}.png`,
        "Steam": `${icon_source_path}/files/img/follow_me/steam/steam_${theme}.png`,
        "Tiktok": `${icon_source_path}/files/img/follow_me/tiktok/tiktok_${theme}.png`,
        "Tumblr": `${icon_source_path}/files/img/follow_me/tumblr/tumblr_${theme}.png`,
        "Twitch": `${icon_source_path}/files/img/follow_me/twitch/twitch_${theme}.png`,
        "Twitter": `${icon_source_path}/files/img/follow_me/twitter/twitter_${theme}.png`,
        "Vimeo": `${icon_source_path}/files/img/follow_me/vimeo/vimeo_${theme}.png`,
        "Youtube": `${icon_source_path}/files/img/follow_me/youtube/youtube_${theme}.png`,
    }
    for (var item in icon_list) {
        if (media_name.toLowerCase() === item.toLocaleLowerCase()) {
            social_icon += "<a href = '" + social_link + "' target = '_blank' class='social_icon'>";
            social_icon += "<img src = '" + icon_list[item] + "' alt = '" + item + "' class='social_icon'/>";
            social_icon += "</a>";
        }
    }
    document.getElementById(ID).innerHTML += social_icon;
}

function add_social_credits(ID, icon_source_path = "../../../") {
    var icons = "";
    var link_list = {
        "Behance": "https://www.flaticon.com/free-icons/behance-network",
        "Codepen": "https://materialdesignicons.com/icon/codepen",
        "Dev-to": "https://materialdesignicons.com/icon/dev-to",
        "Discord": "https://materialdesignicons.com/icon/discord",
        "Facebook": "https://materialdesignicons.com/icon/facebook",
        "Github": "https://materialdesignicons.com/icon/github",
        "Instagram": "https://materialdesignicons.com/icon/instagram",
        "Linkedin": "https://materialdesignicons.com/icon/linkedin",
        "Patreon": "https://materialdesignicons.com/icon/patreon",
        "Pinterest": "https://pictogrammers.com/library/mdi/icon/pinterest/",
        "Reddit": "https://pictogrammers.com/library/mdi/icon/reddit/",
        "Repl.it": "https://repl.it/public/images/favicon.ico",
        "Snapchat": "https://pictogrammers.com/library/mdi/icon/snapchat/",
        "SoundCloud": "https://pictogrammers.com/library/mdi/icon/soundcloud/",
        "Spotify": "https://pictogrammers.com/library/mdi/icon/spotify/",
        "Steam": "https://materialdesignicons.com/icon/steam",
        "Tiktok": "https://www.flaticon.com/free-icons/tiktok",
        "Tumblr": "https://www.flaticon.com/free-icons/tumblr-badge",
        "Twitch": "https://pictogrammers.com/library/mdi/icon/twitch/",
        "Twitter": "https://pictogrammers.com/library/mdi/icon/twitter/",
        "Vimeo": "https://pictogrammers.com/library/mdi/icon/vimeo/",
        "Youtube": "https://materialdesignicons.com/icon/youtube",
    }
    for (var item in link_list) {
        document.getElementById(ID).innerHTML += "<div class='contributor'>";
        add_social_icon(ID, item, link_list[item], icon_source_path);
        icons += "   <a href='" + link_list[item] + "' target='_blank' class='social_icon'>";
        icons += item + " : " + link_list[item] + "</a>";
        icons += "</div>";
        document.getElementById(ID).innerHTML += icons;
        icons = "";
    }
}
