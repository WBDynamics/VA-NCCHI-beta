var data = {

    "data": [
        {
            "name": "Thomas Osborne, MD",
            "title": "Director",
            "img": "../assets/img/home/team-osborne.png",
            "description": "Thomas Osborne, MD, is the Director of VA" + "&#8217;" + "s National Center for Collaborative Healthcare Innovation (NCCHI) and Executive Director of the VA Convergence Center (VC2). His team" + "&#8217;" + "s mission is to deliver the best and most advanced healthcare solutions to our Veterans. They are collaborating throughout VA, with other government agencies, and industry as they leverage thelatest technologies such as advanced analytics, cloud computing, 5G, sensor technology, wearables, augmented reality, and virtual reality.  Dr. Osborne is the inaugural recipient of the VA Under Secretary for Health Robert L. Jesse Award for Excellence in Innovation, the Arthur S. Flemming Award for exceptional public service, as well as multiple other national awards. His work has been published in numerous medical journals and textbooks on topics such as health equity, predictive analytics, advanced technology, and the future of health care. Dr. Osborne received his medical degree from Dartmouth Medical School before completing residency and fellowship at Harvard hospitals."
        }                              
    ]

}


data.data.forEach(bio => $('.bios-list__item-container').append("<div class='grid-col-12 desktop:grid-col-2 bios-list__img'>" + "<img src='" + bio.img + "' />" + "</div>" + "<div class='grid-col-12 desktop:grid-col-10 bios-list__item padding-y-6'>" + "<p><strong>" + bio.name + "</strong></p>" + "<p>" + bio.title + "</p>" + "<p>" + bio.description + "</span>" +  "</div>")); 

$(".bios-list__item-container p:empty" ).remove();

