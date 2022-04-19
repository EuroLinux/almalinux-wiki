(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{426:function(t,a,r){"use strict";r.r(a);var n=r(62),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"how-to-create-a-public-mirror-for-almalinux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-a-public-mirror-for-almalinux"}},[t._v("#")]),t._v(" How to create a public mirror for AlmaLinux")]),t._v(" "),r("p",[t._v("Mirrors are extremely important to provide a fast and reliable\ninfrastructure, and we are very grateful to people and organizations that\nhelp us with this. The current list of public mirrors can be found on the\n"),r("a",{attrs:{href:"https://mirrors.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mirrors.almalinux.org"),r("OutboundLink")],1),t._v(" website.")]),t._v(" "),r("p",[t._v("You can create a public AlmaLinux mirror in 6 easy steps:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Make sure that you have enough free space: 500GB is the absolute minimum\nbut we recommend reserving at least 700GB.")])]),t._v(" "),r("li",[r("p",[t._v("Synchronize with the official AlmaLinux mirror via rsync:")]),t._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[t._v("/usr/bin/rsync -avSH -f "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'R .~tmp~'")]),t._v(" --delete-delay --delay-updates rsync://rsync.repo.almalinux.org/almalinux/ /almalinux/dir/on/your/server/\n")])])])]),t._v(" "),r("li",[r("p",[t._v("Create a cron task to sync it periodically (we recommend updating the\nmirror every 3 hours):")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("0 */3 * * * /usr/bin/flock -n /var/run/almalinux_rsync.lock -c \"/usr/bin/rsync -avSH -f 'R .~tmp~' --delete-delay --delay-updates rsync://rsync.repo.almalinux.org/almalinux/ /almalinux/dir/on/your/server/\"\n")])])])]),t._v(" "),r("li",[r("p",[t._v("Ensure the accuracy of GeoIP city, longitude, and latitude data for your mirror IP(s) with MaxMind at\n"),r("a",{attrs:{href:"https://www.maxmind.com/en/geoip-demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.maxmind.com/en/geoip-demo"),r("OutboundLink")],1),t._v(".\nSubmit a "),r("a",{attrs:{href:"https://support.maxmind.com/geoip-data-correction-request/",target:"_blank",rel:"noopener noreferrer"}},[t._v("correction request"),r("OutboundLink")],1),t._v(" with accurate city data\nif the information is incorrect.")]),t._v(" "),r("p",[t._v("Our mirrorlist URL tries to serve the best mirror to a client based on GeoIP data\nso having accurate GeoIP data ensures the best possible experience for users.")])]),t._v(" "),r("li",[r("p",[t._v("Join the "),r("a",{attrs:{href:"https://lists.almalinux.org/mailman3/lists/mirror-announce.lists.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mirror-announce"),r("OutboundLink")],1),t._v(" mailing list to receive\nimportant mirror-related updates from the AlmaLinux team.")]),t._v(" "),r("p",[t._v("You may also consider joining the "),r("a",{attrs:{href:"https://lists.almalinux.org/mailman3/lists/mirror.lists.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mirror"),r("OutboundLink")],1),t._v(" mailing list for\ngeneral discussion/help related to mirrors.")]),t._v(" "),r("p",[t._v("We recommend joining the "),r("a",{attrs:{href:"https://chat.almalinux.org/almalinux/channels/mirrors",target:"_blank",rel:"noopener noreferrer"}},[t._v("mirrors channel on Mattermost"),r("OutboundLink")],1),t._v(" for any questions\nas well as updates from our team that impact mirror hosts in a live interactive format.")])]),t._v(" "),r("li",[r("p",[t._v("Fork the "),r("a",{attrs:{href:"https://github.com/AlmaLinux/mirrors/",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/AlmaLinux/mirrors"),r("OutboundLink")],1),t._v("\nrepository and create a pull request that will add a YAML file describing\nyour mirror to the "),r("code",[t._v("mirrors.d")]),t._v(" directory.\nYou can use the "),r("a",{attrs:{href:"https://github.com/AlmaLinux/mirrors/blob/master/mirrors.d/repo.almalinux.org.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("official AlmaLinux repo file"),r("OutboundLink")],1),t._v("\nas an example. Your mirror does not have to provide all the protocols\nthat our main mirror provides, but either HTTP or HTTPS is required. Format of a mirror's config is described below.\nAlso, you can validate your config to use some JSON online validator using "),r("a",{attrs:{href:"https://github.com/AlmaLinux/mirrors/blob/yaml_snippets/json_schemas/mirror_config.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("that JSON schema"),r("OutboundLink")],1),t._v(" and converting your config to JSON.")]),t._v(" "),r("div",{staticClass:"language-YAML extra-class"},[r("pre",{pre:!0,attrs:{class:"language-yaml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <domain name of a mirror"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. almalinux.mirror.link"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud_type")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <azure"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("aws. It'll be required if a mirror is located in AWS/Azure cloud"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("address")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <http URL to a mirror"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. http"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//almalinux.mirror.link/almalinux"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("https")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <https URL to a mirror"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. https"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//almalinux.mirror.link/almalinux"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rsync")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <rsync URL to a mirror"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. rsync"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//almalinux.mirror.link/almalinux"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ftp")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <ftp URL to a mirror"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. ftp"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//almalinux.mirror.link/almalinux"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("update_frequency")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <update frequency of a mirror"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. 1h"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sponsor")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <Name of a mirror's sponsor/holder"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. Some company name"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sponsor_url")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <URL of a mirror's sponsor/holder"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. http"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//some.company.name"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("email")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <e"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("mail of a mirror's sponsor/holder"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. admin@some.company.name"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("geolocation")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("continent")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <name of a continent"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. North America; than field is not mandatory"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("country")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <two"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("letter name of a country"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. US"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("state_province")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <name of a province"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. New York"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("city")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <name of a city"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. New York"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("private")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <true"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("false. A mirror is available in some local network if the param is true"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("monopoly")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <true"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("false. The mirrors list contains only this private mirror for a suitable client if param is true"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The list will be required if a mirror is local or cloud.")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# It contains subnets behind which located a private mirror.")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Also, it can be string and contains URL which returns json list with subnets")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("subnets")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" <network mask"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# That parameter can specify ASN which is maintained by a mirror is located in cloud")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("asn")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <ASN number"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" see https"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//en.wikipedia.org/wiki/Autonomous_system_(Internet)"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The list will be required if a mirror is located in Azure/AWS cloud")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud_regions")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" <cloud_region of Azure/AWS"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e.g. australiacentral2"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n")])])]),r("p",[t._v("You could find more information about creating a pull request in\n"),r("a",{attrs:{href:"https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub documentation"),r("OutboundLink")],1),t._v(".\nAfter reviewing the pull request your mirror will be published at the\n"),r("a",{attrs:{href:"https://mirrors.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mirrors.almalinux.org"),r("OutboundLink")],1),t._v(" page and will\nbe added to the mirrorlists that dnf package manager works with.")])])]),t._v(" "),r("p",[t._v("All mirror hosts are eligible for membership to the AlmaLinux OS Foundation.\nMake sure you submit your "),r("a",{attrs:{href:"https://almalinux.org/foundation/members/",target:"_blank",rel:"noopener noreferrer"}},[t._v("application for membership"),r("OutboundLink")],1),t._v("!")])])}),[],!1,null,null,null);a.default=e.exports}}]);