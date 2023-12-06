function UpdateTheme() {
    var CookieName = "theme",
        listOfIDsToEdit = ["DownloadLogo", "DownloadButtonCredits", "DiscordLogo", "GithubLogo"],
        DictOfCodesToApply = {
            "l": {
                "DownloadLogo": "<img class=\"image_WE_Link_Container_child\" src=\"files/img/down-arrow.svg\" alt=\"Download Image\" title=\"Download Image\"/>",
                "DownloadButtonCredits": "<img class=\"image_credits\" src=\"files/img/down-arrow.svg\"/>",
                "DiscordLogo": "<img class=\"image_Discord_Link_Container_child\" src=\"files/requirements/img/Follow-me/discord/discord_B.PNG\" alt=\"Discord logo\" title=\"Discord logo\"/>",
                "GithubLogo": "<img class=\"image_hosts\" src=\"files/requirements/img/Follow-me/github/github_B.PNG\"/>"
            }, "d": {
                "DownloadLogo": "<img class=\"image_WE_Link_Container_child\" src=\"files/img/down-arrow_W.svg\" alt=\"Download Image\" title=\"Download Image\"/>",
                "DownloadButtonCredits": "<img class=\"image_credits\" src=\"files/img/down-arrow_W.svg\"/>",
                "DiscordLogo": "<img class=\"image_Discord_Link_Container_child\" src=\"files/requirements/img/Follow-me/discord/discord_W.png\" alt=\"Discord logo\" title=\"Discord logo\"/>",
                "GithubLogo": "<img class=\"image_hosts\" src=\"files/requirements/img/Follow-me/github/github_W.png\"/>"
            }
        };
    checkTheme(CookieName, listOfIDsToEdit, DictOfCodesToApply);
}
