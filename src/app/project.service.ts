import { Injectable, DebugElement } from '@angular/core';

@Injectable()
export class ProjectService {

    projects = [
    {
      priority: 100,
      images: ['1.jpg'],
      name: 'Digit',
      tags: ['games'],
      description: 'Digit is a product being developed by my startup, Dactize, in order to enhance the mobile gaming experience. It allows a more physical, and engaging experience on smartphones and tablets, providing a more convenient method for touchscreen gaming interactions.\n\nI work as the Director of Technology, designing the product both aesthetically and technically, which includes hardware and software. Currently, the device works with the Unity game engine on Android devices.',
      otherInfo: {
        Roles: 'CTO, Lead developer',
        Fields: 'Interaction Design, UX, HCI, Hardware & Software Development',
        Website: 'dactize.com'
      }
    },
    {
      priority: 70,
      images: ['2.jpg'],
      name: 'Tipsy Tree',
      tags: ['games'],
      description: 'Tipsy Tree is a networked, augmented reality game for Android devices. It requires two players, each with their own device. One player controls a raccoon character through augmented reality, running around on top of a tree collecting fruits. The other player sees a top-down view on their device and uses the accelerometer to tilt the tree the raccoon is moving around on. The objective for player 1 is to stay on the tree and collect as many fruits as possible, while player 2 tries to knock them off the tree.\n\nI worked as the lead developer, working with Unity, Vuforia and C#. My partner, Krista Murphy, was responsible for artwork, modeling, texturing and rigging.',
      otherInfo: {
        Roles: 'Lead developer',
        Technology: 'Unity, Vuforia, Accelerometer, C#, Sockets',
      }
    },
    {
      priority: 80,
      images: ['3.jpg'],
      name: 'Titan',
      tags: ['games'],
      description: 'Titan is an exploration, hack n\' slash style game for iOS and Android. The objective is to explore a planet and transport as many creatures back to your ship as possible without them destroying you first.\n\nI worked as 1 of 4 developers on this project, primarily focusing on the user interface.',
      otherInfo: {
        Roles: 'Game developer, UI developer',
        Technology: 'Unity, C#, iOS, Android',
      }
    },
    {
      priority: 60,
      images: ['4.jpg'],
      name: 'Duckling Hunt',
      tags: ['games'],
      description: 'Duckling Hunt is a 4 player game designed to be played with 4 gamepads. 2 players play as mother ducks, trying to collect as many of their duckling as they can. The other 2 players play as hunters who are trying to shoot the ducklings trailing the mother ducks.\n\nI was 1 of 2 developers on a 4 person team for this project.',
      otherInfo: {
        Roles: 'Game developer',
        Technology: 'Unity, Bluetooth, Gamepads, PC',
      }
    },
    {
      priority: 40,
      images: ['webtropolis.jpg'],
      name: 'Webtropolis',
      tags: ['games'],
      description: 'Webtropolis is a first-person game where your character must kill all the viruses in a city that abstractly represents the world wide web. It is an immersive game which uses a rotating chair-screen rig and camera with face-tracking. The rotating chair allows the user to change direction while the screen acts as a virtual window into the world. The camera tracks the players face in order to determine their current orientation.\n\nI worked as the lead developer on a team with 2 artists.',
      otherInfo: {
        Roles: 'Lead developer',
        Technology: 'Unity, C#, faceAPI, 6DOFStreamer, PC, webcam',
      }
    },
     {
      priority: 30,
      images: ['6.jpg'],
      name: 'Reaction Diffusion Landscapes',
      tags: ['games'],
      description: 'This was a personal, experimental game where I explored the use of generative landscapes in a first-person game. I used a 3D reaction-diffusion engine I had previously written in order to randomly generate landscapes. The objective is simple, to collect glowing spheres that appear on and around the generated landscapes.',
      otherInfo: {
        Roles: 'Sole developer',
        Technology: 'Unity, Reaction Diffusion Engine (Personal), C#',
      }
    },
     {
      priority: 80,
      images: ['7.jpg'],
      name: 'Logic Gates App',
      tags: ['games'],
      description: 'The Logic Gates App was a tangible, educational app designed to teach middle-school age children about the fundamentals of computer logic. A physical, logic gate shaped object was required to use the app and interacted with the app through the touchscreen and bluetooth. The idea was to see if providing a physical interface along with the touchscreen could further engage a younger audience and create a more effective learning experience.\n\nThis was a personal project that I explored while working on my Master\'s thesis at Texas A&M.',
      otherInfo: {
        Roles: 'Sole developer',
        Technology: 'Unity, Touchscreen Tangible Recognition Library (Personal), Bluetooth LE, C#, Java, 3D Printing, Arduino',
        website: 'logicgatesapp.wordpress.com'
      }
    },
     {
      priority: 80,
      images: ['8.jpg'],
      name: 'Touchscreen Trading Cards',
      tags: ['games'],
      description: 'This app was developed as a companion app to the Titan game I worked on. It was built using a library I developed allowing touchscreen devices to recognize physical objects through pattern recognition. The app used trading cards that would give a player extra information and points when they pressed it to their screen within the specified area of the app.\n\nI worked as the only developer on this project, using direction and artwork from another graduate student and my thesis advisor.',
      otherInfo: {
        Roles: 'Lead developer',
        Technology: 'Unity, Touchscreen Tangible Recognition Library (Personal), C#',
      }
    },
     {
      priority: 90,
      images: ['9.jpg'],
      name: 'Touchscreen Tangible Library',
      tags: ['software'],
      description: 'The Touchscreen Tangible Library is a library I wrote which allows a touchscreen application to recognize when a certain object has been set on the screen. It does so using conductive points and pattern recognition. The library was written in C#, C++/OFX and Processing. Several undergraduate classes used the library to support their projects as well as 2 graduate students who used it as part of their thesis work.',
      otherInfo: {
        Roles: 'Sole developer',
        Technology: 'C#, C++/OFX, Processing',
      }
    },
     {
      priority: 85,
      images: ['10.jpg'],
      name: 'One More Shot',
      tags: ['games'],
      description: 'One More Shot is a serious game designed to help high school and college students better understand their drinking habits and the risks associated with them. My primary role in this project was the backend developer/sysadmin, though I also worked in Unity on the frontend as well.',
      otherInfo: {
        Roles: 'Lead backend developer/sysadmin, game developer',
        Technology: 'linux, python, docker, HTML, CSS, javascript, C#, Unity',
      }
    },
     {
      priority: 90,
      images: ['world_events_app.jpg'],
      name: 'World Events App',
      tags: ['software'],
      description: 'Ionic 2 app which displays information about events and associated people around the world. Data comes from my current events api which processes information from GDELT using natural language processing.',
      otherInfo: {
        Roles: 'Sole developer',
        Technology: 'Ionic 2, Angular 2, Typescript, SQL, Flask, Python, NLTK, Stanford NLP',
        Code: 'https://github.com/stevo2588/World-Events'
      }
    },
     {
      priority: 90,
      images: ['world_events_game.jpg'],
      name: 'World Events Gamified',
      tags: ['games', 'software'],
      description: 'Unity app/game which displays information about events and associated people around the world. This is an experimental work in progress to see how current events can be gamified to engage a wider news audience. Data comes from my current events api which processes information from GDELT using natural language processing.',
      otherInfo: {
        Roles: 'Sole developer',
        Technology: 'Unity, C#, SQL, Flask, Python, NLTK, Stanford NLP',
      }
    },
     {
      priority: 80,
      images: ['11.jpg'],
      name: 'Well Log Tool',
      tags: ['software'],
      description: 'This desktop software was developed for oil/gas well logging research in a Chevron funded lab. My role was the lead developer in a small team.',
      otherInfo: {
        Roles: 'Lead developer',
        Technology: 'C#, .NET, MVVM, Prism, WPF',
      }
    },
     {
      priority: 75,
      images: ['personal_website.jpg'],
      name: 'Personal Website',
      tags: ['software'],
      description: 'This website was created using Angular 2, Bootstrap, jQuery and the awesome Isotope plugin.',
      otherInfo: {
        Roles: 'Sole developer',
        Technology: 'Angular 2, Typescript, jQuery',
      }
    },
     {
      priority: 80,
      images: ['12.jpg'],
      name: 'Not Again',
      tags: ['animations', 'publications'],
      description: 'This animation short was created at Texas A&M in a collaboration with Reel FX Studio. It was featured at SIGGRAPH and won several awards in animation festivals. My role was the pipeline lead, also contributing heavily to visual effects (lava and clouds) and rendering.',
      otherInfo: {
        Roles: 'Lead pipeline developer, effects, 3D generalist',
        Technology: 'python, Houdini (effects), Maya (modeling, texturing, rigging, animation)',
        Video: 'https://vimeo.com/75804836'
      }
    },
     {
      priority: 30,
      images: ['13.jpg'],
      name: 'Adventure of the Minty Murder',
      tags: ['animations'],
      description: 'This was one of my earlier animations I created while an undergraduate at Texas A&M.',
      otherInfo: {
        Technology: '3DS Max (modeling, texturing, rigging, animation)',
        Video: 'https://vimeo.com/12297431'
      }
    },
     {
      priority: 20,
      images: ['14.jpg'],
      name: 'The Man in the Moon',
      tags: ['animations'],
      description: 'Another individual animation created during my undergrad at Texas A&M.',
      otherInfo: {
        Technology: '3DS Max (modeling, texturing, rigging, animation)',
        Video: 'https://vimeo.com/17936856'
      }
    },
     {
      priority: 70,
      images: ['15.jpg', '16.jpg'],
      name: 'Touchscreen Controller',
      tags: ['games'],
      description: 'This device pre-dates the product designed for Dactize and was designed for larger touchscreens. It creates an extremely integrated hybrid interface, making it easy for a user to move between physical and touchscreen controls.',
      otherInfo: {
        Roles: 'Sole developer',
        Technology: 'Autodesk Fusion 360, 3DS Max, Arduino',
      }
    },
     {
      priority: 100,
      images: ['17.jpg'],
      name: 'Bluetooth Wearable - Utility Patent',
      tags: ['publications'],
      description: 'Non-provisional utility patent filed for my startup invention. The patent issued mid-2016. My role is the primary inventor.',
      otherInfo: {
        Roles: 'Primary inventor',
        URL: 'https://www.google.com/patents/US9332581',
      }
    },
     {
      priority: 95,
      images: ['Digit_Provisional_Patent.jpg'],
      name: 'Digit - Utility Patent (Provisional)',
      tags: ['publications'],
      description: 'The second utility patent (provisional) filed for my startup invention. This includes additions to the original invention. My role is the primary inventor.',
      otherInfo: {
        Roles: 'Primary inventor',
        URL: 'http://appft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PG01&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.html&r=1&f=G&l',
      }
    },
     {
      priority: 80,
      images: ['18.jpg'],
      name: 'Stampies',
      tags: ['games', 'publications'],
      description: 'Research I collaborated on with Janelle Arita and Jinsil Hwaryoung Seo during my Masters at Texas A&M. I developed the app which was designed for children to use with capacitivate stamps.',
      otherInfo: {
        Roles: 'Lead developer',
        Technology: 'C++, OFX, Processing, Touchscreen Tangible Library',
      }
    },
     {
      priority: 85,
      images: ['19.jpg'],
      name: 'Soft Tangible Interaction for Tablets',
      tags: ['publications'],
      description: 'SIGGRAPH \'14 paper/poster describing our research with soft touchscreen tangibles built on my Touchscreen Tangible Library. Published with another grad student and professor. ',
      otherInfo: {
        Roles: 'Contributer, lead developer',
        Paper: 'Arita, J., Seo, J. H., & Aldriedge, S. (2014, July). Soft tangible interaction design with tablets for young children. In ACM SIGGRAPH 2014 Posters (p. 54). ACM.',
        URL: 'http://dl.acm.org/citation.cfm?id=2614267&dl=ACM&coll=DL',
        Technology: 'Touchscreen Tangible Library',
      }
    },
     {
      priority: 88,
      images: ['TEI_2015.jpg'],
      name: 'Material Significance',
      tags: ['publications'],
      description: 'TEI \'15 paper describing our user study and research with touchscreen tangibles built on my Touchscreen Tangible Library. Published with other researchers. ',
      otherInfo: {
        Roles: 'Contributer, lead developer',
        Paper: 'Seo, J. H., Arita, J., Chu, S., Quek, F., & Aldriedge, S. (2015, January). Material Significance of Tangibles for Young Children. In Proceedings of the Ninth International Conference on Tangible, Embedded, and Embodied Interaction (pp. 53-56). ACM.',
        URL: 'http://dl.acm.org/citation.cfm?id=2680583',
        Technology: 'Touchscreen Tangible Library',
      }
    },
     {
      priority: 1,
      images: ['20.jpg'],
      name: 'Interactive Studio - Fall \'12',
      tags: ['teaching'],
      description: 'In this course we focused on creating interactive content for healthcare purposes. Some of the students\' projects were built using my Touchscreen Tangible Library.',
      otherInfo: {
        Roles: 'Teaching assistant',
        Technology: 'Processing, Arduino, Touchscreen Tangible Library, MadMapper',
      }
    },
     {
      priority: 1,
      images: ['21.jpg'],
      name: 'Sculpture - Spring \'13',
      tags: ['teaching'],
      description: 'This art studio focused on non-traditional media and dynamic sculptures.',
      otherInfo: {
        Roles: 'Teaching assistant',
      }
    },
     {
      priority: 1,
      images: ['22.jpg'],
      name: 'Interactive Performance - Spring \'13',
      tags: ['teaching'],
      description: 'This multi-discipline course was composed of computer science, visualization, and dance students. Using technology such as projection mapping, computer vision, and physical computing, students built real-time, interactive installations that resulted in visually stunning performances.',
      otherInfo: {
        Roles: 'Teaching assistant',
        Technology: 'Processing, C++, Arduino, Projection Mapping, Microsoft Kinect, CV',
      }
    },
     {
      priority: 1,
      images: ['24.jpg'],
      name: 'Interactive Studio - Fall \'13',
      tags: ['teaching'],
      description: 'In this course we focused on creating interactive content for educational purposes. The final projects were built using my Touchscreen Tangible Library and were designed for use by children.',
      otherInfo: {
        Roles: 'Teaching assistant',
        Technology: 'Processing, Arduino, Touchscreen Tangible Library, MadMapper',
      }
    },
     {
      priority: 1,
      images: ['23.jpg'],
      name: 'Interactive Performance - Spring \'14',
      tags: ['teaching'],
      description: 'This multi-discipline course was composed of computer science, visualization, and dance students. Using technology such as projection mapping, computer vision, and physical computing, students built real-time, interactive installations that resulted in visually stunning performances.',
      otherInfo: {
        Roles: 'Teaching assistant',
        Technology: 'Processing, C++, Arduino, Projection Mapping, Microsoft Kinect, CV',
      }
    },

     {
      priority: 1,
      images: ['projection_mapping.jpg'],
      name: 'Viz Studio - Summer \'14',
      tags: ['teaching'],
      description: 'This studio was heavily focused on animation (including modeling, texturing and rigging) using Maya and Blender. We added projection mapping to make the animations more immersive, some of which also included an interactive component.',
      otherInfo: {
        Roles: 'Teaching assistant',
        Technology: 'Maya, Blender, MadMapper',
      }
    },

     {
      priority: 95,
      images: ['VIST_205-Fall2014.jpg'],
      name: 'Viz Studio - Fall \'14',
      tags: ['teaching'],
      description: 'In this course, undergraduates completed a project for each of the 3 Visualization tracks: video game development, graphic design, and animation.',
      otherInfo: {
        Roles: 'Primary instructor',
        Technology: 'Python, Panda3D, After Effects, Maya, Motion Tracking, Illustrator, Photoshop',
        Photo: 'Rebecca Migl - Final Animation',
      }
    },

     {
      priority: 1,
      images: ['25.jpg'],
      name: 'USA Science Engineering Festival',
      tags: ['publications'],
      description: 'Huge science and engineering festival where we held a STEAM (Science, Technology, Engineering, Art, Math) booth. Several grad students and I presented our technology to hundreds of children and adults.',
      otherInfo: {
        Roles: 'Presenter',
        Location: 'Washington D.C.',
        Technology: 'Touchscreen Tangible Library, OFX, Unity, Arduino',
      }
    },
     {
      priority: 1,
      images: ['26.jpg'],
      name: 'Art & Technology Camp for Girls',
      tags: ['teaching'],
      description: 'Summer art/tech camp for young girls.',
      otherInfo: {
        Roles: 'Volunteer, assistant teacher',
        Technology: 'Arduino, Makey Makey, conductive fabric/thread',
      }
    },
     {
      priority: 1,
      images: ['27.jpg'],
      name: 'Raytracer',
      tags: ['software'],
      description: 'This program is a ray tracing renderer, used to convert 3D files and functions into photo-realistic and non-realistic 2D images.',
      otherInfo: {
        Roles: 'Sole developer',
        Technology: 'C++, OpenGL, Qt',
        Code: 'https://github.com/stevo2588/RayTracer'
      }
    },
     {
      priority: 1,
      images: ['28.jpg'],
      name: 'Image Manipulator',
      tags: ['software'],
      description: 'Application which performs image processing on an input image or video in order to create interesting visual results. Program can perform common image processing functions (similar to functions in Photoshop) as well as more complex and artistic functions (dithering, reaction diffusion)',
      otherInfo: {
        Roles: 'Sole developer',
        Technology: 'C++, OpenGL, SFML',
      }
    },
     {
      priority: 1,
      images: ['29.jpg'],
      name: 'Veterinary Anatomy App',
      tags: ['software'],
      description: 'App designed to aid veterinary students in learning canine anatomy. Uses tablet camera and text recognition technology to read from a textbook and display the appropriate anatomical part in an interactive 3D display.',
      otherInfo: {
        Roles: 'Lead developer',
        Technology: 'Unity, C#, Vuforia (AR)',
      }
    },
     {
      priority: 1,
      images: ['30.jpg'],
      name: 'AR Spelling',
      tags: ['software'],
      description: 'App designed for research purposes to see how a child\'s spelling might benefit from its use. Uses image/object recognition to detect object in camera view and display a spelling puzzle',
      otherInfo: {
        Roles: 'Developer',
        Technology: 'Unity, C#, Vuforia (AR)',
      }
    },
     {
      priority: 1,
      images: ['31.jpg'],
      name: '3DS Max Material Library',
      tags: ['software'],
      description: 'This software is a 3DS Max plugin used to create and manage materials and material libraries. I developed this plugin while working for an animation company for use in their production pipeline.',
      otherInfo: {
        Roles: 'Lead developer',
        Technology: 'Maxscript, C#, .NET',
        Code: 'https://github.com/stevo2588/MaterialLibrary-3DSMax'
      }
    },

  ];


  constructor() { }

}
