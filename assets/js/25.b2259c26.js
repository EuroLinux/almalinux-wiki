(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{438:function(a,e,i){"use strict";i.r(e);var t=i(62),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[i("h1",{attrs:{id:"almalinux-os-docker-images"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#almalinux-os-docker-images"}},[a._v("#")]),a._v(" AlmaLinux OS Docker Images")]),a._v(" "),i("h2",{attrs:{id:"about-almalinux-docker-images"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#about-almalinux-docker-images"}},[a._v("#")]),a._v(" About AlmaLinux Docker Images")]),a._v(" "),i("p",[a._v("AlmaLinux Docker Images is a great way to build your container image based on AlmaLinux OS. AlmaLinux Docker Images offer users such benefits as high reliability, security, and performance. It is possible to build a cloud and web application that is developed in containers and share it with whom you want or where you want to collaborate after pushing it to the registry server with any of the images.")]),a._v(" "),i("h2",{attrs:{id:"almalinux-docker-images-variants"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#almalinux-docker-images-variants"}},[a._v("#")]),a._v(" AlmaLinux Docker Images Variants")]),a._v(" "),i("p",[a._v("AlmaLinux OS project now provides two official images: Default (Platform) and Minimal (Platform), and four fully compatible alternatives for the Red Hat Universal Base Images (UBI): Base, Init, Micro and Minimal.")]),a._v(" "),i("h3",{attrs:{id:"almalinux-default-platform"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#almalinux-default-platform"}},[a._v("#")]),a._v(" AlmaLinux: Default (Platform)")]),a._v(" "),i("p",[a._v("The general purpose of the default (platform) image is a container image that contains default packages and can be used as a drop-in replacement for the CentOS 8 image.")]),a._v(" "),i("p",[a._v("Container image tag: "),i("code",[a._v("almalinux:latest")])]),a._v(" "),i("p",[a._v("Link to the repository:")]),a._v(" "),i("p",[i("a",{attrs:{href:"https://hub.docker.com/_/almalinux",target:"_blank",rel:"noopener noreferrer"}},[a._v("hub.docker.com/_/almalinux"),i("OutboundLink")],1)]),a._v(" "),i("h3",{attrs:{id:"almalinux-minimal"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#almalinux-minimal"}},[a._v("#")]),a._v(" AlmaLinux: Minimal")]),a._v(" "),i("p",[a._v("The AlmaLinux minimal image is a compacted image that contains a limited package set and uses the "),i("code",[a._v("microdnf")]),a._v(" package manager as a replacement for DNF. A minimal DNF uses libdnf and therefore doesn't require Python. This image is 52% smaller in size (37MB download, 102MB expanded). It is designed for applications that come with their dependencies bundled like GO, NodeJS, Java. You can get the Minimal image via two variants of the following container tags and links.")]),a._v(" "),i("p",[a._v("Container image tag for Minimal (Platform): "),i("code",[a._v("almalinux:minimal")])]),a._v(" "),i("p",[a._v("Container image tag for Minimal ( UBI - alternative): "),i("code",[a._v("almalinux/8-minimal")])]),a._v(" "),i("p",[a._v("Links to repositories:")]),a._v(" "),i("p",[i("a",{attrs:{href:"https://quay.io/repository/almalinux/8-minimal?tab=tags",target:"_blank",rel:"noopener noreferrer"}},[a._v("quay.io/repository/almalinux/8-minimal"),i("OutboundLink")],1)]),a._v(" "),i("p",[i("a",{attrs:{href:"https://hub.docker.com/r/almalinux/8-minimal",target:"_blank",rel:"noopener noreferrer"}},[a._v("hub.docker.com/r/almalinux/8-minimal"),i("OutboundLink")],1)]),a._v(" "),i("h3",{attrs:{id:"almalinux-base"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#almalinux-base"}},[a._v("#")]),a._v(" AlmaLinux: Base")]),a._v(" "),i("p",[a._v("The AlmaLinux Base Image is designed to be a base for your containerized applications, middleware and utilities. Base Image includes some helpful OS tools like find, tar, vi, etc., and a full DNF stack. The systemd initialization system and access to free dnf repositories are fully available. The Base image has some differences in a package set than the Default (Platform) image.")]),a._v(" "),i("p",[a._v("Container image tag: "),i("code",[a._v("almalinux/8-base")])]),a._v(" "),i("p",[a._v("Links to repositories:")]),a._v(" "),i("p",[i("a",{attrs:{href:"https://quay.io/repository/almalinux/8-base?tab=tags",target:"_blank",rel:"noopener noreferrer"}},[a._v("quay.io/repository/almalinux"),i("OutboundLink")],1)]),a._v(" "),i("p",[i("a",{attrs:{href:"https://hub.docker.com/r/almalinux/8-base",target:"_blank",rel:"noopener noreferrer"}},[a._v("hub.docker.com/r/almalinux/8-base"),i("OutboundLink")],1)]),a._v(" "),i("h3",{attrs:{id:"almalinux-init"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#almalinux-init"}},[a._v("#")]),a._v(" AlmaLinux: Init")]),a._v(" "),i("p",[a._v("The AlmaLinux Init image is effective if you want to run an init system as Process ID 1 for running multi-services inside a container. The systemd is enabled as the init system in the image.")]),a._v(" "),i("p",[a._v("Container image tag: "),i("code",[a._v("almalinux/8-init")])]),a._v(" "),i("p",[a._v("Links to repositories:")]),a._v(" "),i("p",[i("a",{attrs:{href:"https://quay.io/repository/almalinux/8-init?tab=tags",target:"_blank",rel:"noopener noreferrer"}},[a._v("quay.io/repository/almalinux/8-init"),i("OutboundLink")],1)]),a._v(" "),i("p",[i("a",{attrs:{href:"https://hub.docker.com/r/almalinux/8-init",target:"_blank",rel:"noopener noreferrer"}},[a._v("hub.docker.com/r/almalinux/8-init"),i("OutboundLink")],1)]),a._v(" "),i("h3",{attrs:{id:"almalinux-micro"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#almalinux-micro"}},[a._v("#")]),a._v(" AlmaLinux: Micro")]),a._v(" "),i("p",[a._v("The AlmaLinux Micro image is an even more minimized image. It is distributed without any package manager. The Micro image uses the package manager on the underlying host to install packages, typically using Buildah or Multi-stage builds with Podman. The Micro image is 82% smaller than the Base image and 68% smaller than the Minimal image in size, as this image is 13MB download, 36MB expanded. It is designed for applications that come with their dependencies bundled like GO, NodeJS, Java. Since this image has only very few packages, it is more secure compared to other images.")]),a._v(" "),i("p",[a._v("Container image tag: "),i("code",[a._v("almalinux/8-micro")])]),a._v(" "),i("p",[a._v("Links to repositories:")]),a._v(" "),i("p",[i("a",{attrs:{href:"https://quay.io/repository/almalinux/8-micro?tab=tags",target:"_blank",rel:"noopener noreferrer"}},[a._v("quay.io/repository/almalinux/8-micro"),i("OutboundLink")],1)]),a._v(" "),i("p",[i("a",{attrs:{href:"https://hub.docker.com/r/almalinux/8-micro",target:"_blank",rel:"noopener noreferrer"}},[a._v("hub.docker.com/r/almalinux/8-micro"),i("OutboundLink")],1)]),a._v(" "),i("p",[a._v("If you want to contribute or need any help, join us at "),i("a",{attrs:{href:"https://chat.almalinux.org/almalinux/channels/sigvirtcontainer",target:"_blank",rel:"noopener noreferrer"}},[a._v("Container Sig at Mattermost"),i("OutboundLink")],1),a._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);