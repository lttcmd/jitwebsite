
document.addEventListener("DOMContentLoaded", function() {
    const gridData = [
        {
            rowTitle: "Row 1 Title",
            media: [
                { title: "b o i d s", type: "video", src: "videos/boids.mp4", description: "Boids move together in groups, mimicking how birds or fish might behave in real life. Each boid follows basic rules about staying close to its neighbors, moving in the same direction, and avoiding collisions. By following these rules, they create interesting patterns of movement that mimic realism." },
                { title: "c e l l s", type: "video", src: "videos/atractor.mp4", description: "Cellular automata are models consisting of a grid of cells, each with a state determined by simple rules based on its neighboring cells. These rules govern how the states of cells evolve over time, resulting in complex and often unpredictable patterns emerging from simple initial conditions." },
                { title: "l i f e", type: "video", src: "videos/bones.mp4", description: "The Game of Life is a cellular automaton devised by mathematician John Conway. It operates on a grid of cells where each cell can be 'alive' or 'dead' based on specific rules. Through successive generations, cells evolve according to these rules, creating visually intriguing patterns and behaviors, often with surprising complexity arising from simple initial configurations."}
            ]
        },
        {
            rowTitle: "Row 2 Title",
            media: [

                { title: "p a r t i c l e s", type: "video", src: "videos/cloth.mp4", description: "mimic the behavior of particles in systems by representing them digitally. It applies physical laws to calculate how particles move and interact over time. " },
                { title: "f i e l d s", type: "video", src: "videos/flowfield.mp4", description: "Particle fields with gravity are areas where objects attract each other due to gravity, following Newton's law. " },
                { title: "a t t r a c t o r", type: "video", src: "videos/cells.mp4", description: "The simulation of the Great Attractor involves creating computational models that mimic the gravitational interactions among galaxies in our cosmic vicinity." },
            ]
        },
        {
            rowTitle: "Row 3 Title",
            media: [
                { title: "a n a l y s i s", type: "video", src: "videos/fluid.mp4", description: "a computational technique used to mimic the behavior of fabric or textiles in virtual environments. In these simulations, the cloth is represented as a collection of particles or vertices connected by edges, forming a mesh. Physical properties such as mass, elasticity, and friction are assigned to these particles, allowing them to respond realistically to external forces like gravity, wind, and collisions with other objects. " },
                { title: "r i p p l e", type: "video", src: "videos/ripple.mp4", description: "a computational technique used to mimic the behavior of fabric or textiles in virtual environments. In these simulations, the cloth is represented as a collection of particles or vertices connected by edges, forming a mesh. Physical properties such as mass, elasticity, and friction are assigned to these particles, allowing them to respond realistically to external forces like gravity, wind, and collisions with other objects. " },
             
                { title: "f l u i d", type: "video", src: "videos/life.mp4", description: "a computational technique used to mimic the behavior of fabric or textiles in virtual environments. In these simulations, the cloth is represented as a collection of particles or vertices connected by edges, forming a mesh. Physical properties such as mass, elasticity, and friction are assigned to these particles, allowing them to respond realistically to external forces like gravity, wind, and collisions with other objects. " },
            
            ]
        },
        {
            rowTitle: "Row 4 Title",
            media: [
                { title: "s h a p e s", type: "video", src: "videos/shapes.mp4", description: "a computational technique used to mimic the behavior of fabric or textiles in virtual environments. In these simulations, the cloth is represented as a collection of particles or vertices connected by edges, forming a mesh. Physical properties such as mass, elasticity, and friction are assigned to these particles, allowing them to respond realistically to external forces like gravity, wind, and collisions with other objects. " },
            
                { title: "s l i m e", type: "video", src: "videos/mandle.mp4", description: "a computational technique used to mimic the behavior of fabric or textiles in virtual environments. In these simulations, the cloth is represented as a collection of particles or vertices connected by edges, forming a mesh. Physical properties such as mass, elasticity, and friction are assigned to these particles, allowing them to respond realistically to external forces like gravity, wind, and collisions with other objects. " },
            ]
        }
        // Add more rows as needed
    ];



    const gridContainer = document.getElementById("grid");
    const modalOverlay = document.querySelector(".modal-overlay");
    const modalContent = document.querySelector(".modal-content");
    const modalVideoContainer = document.querySelector(".modal-video-container");
    const modalTitle = document.querySelector(".modal-title");
    const modalText = document.querySelector(".modal-text");
    const closeModalButton = document.querySelector(".close-modal");
    let originalVideoContainer; // To store the original container of the video
    const aboutLink = document.getElementById('about-link'); // Make sure the ID matches your HTML
    const contactLink = document.getElementById('contact-link'); // Make sure the ID matches your HTML


    function closeModalAndRestoreVideo() {
        modalOverlay.style.display = "none";
        document.body.classList.remove('body-no-scroll'); // Re-enable scrolling without adjusting scroll position
    
        if (originalVideoContainer && modalVideoContainer.firstChild) {
            originalVideoContainer.appendChild(modalVideoContainer.firstChild); // Move the video back to its original container
            originalVideoContainer = null;
        }
    }
    
    
    
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action
        displayModal("About", "We create high-impact audio/visual content and simulations for artists and creatives. Our expertise spans visual programming, interactive installations, and sound design. We can build new concepts or transform existing work into interactive and immersive experiences. ");
    });

    contactLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action
        displayModal("Contact", "Email: contact@jit.ter");
    });

    // Function to display custom content in the modal
    function displayModal(title, text) {
        modalOverlay.style.display = "flex";
        modalTitle.textContent = title;
        modalText.textContent = text;
        modalVideoContainer.innerHTML = ''; // Prepare for custom content
        document.body.classList.add('body-no-scroll'); // Disable scrolling without affecting scroll position
    }
    

    gridData.forEach(section => {
        section.media.forEach(item => {
            const mediaItem = document.createElement("div");
            mediaItem.classList.add("media-item");

            const mediaTitle = document.createElement("h3");
            mediaTitle.textContent = item.title;
            mediaItem.appendChild(mediaTitle);

            if (item.type === "video") {
                const video = document.createElement("video");
                video.setAttribute("muted", "true");
                video.setAttribute("loop", "true");
                video.setAttribute("playsinline", "true");
                video.style.width = "100%";
                const source = document.createElement("source");
                source.src = item.src;
                source.type = "video/mp4";
                video.appendChild(source);
                mediaItem.appendChild(video);

                mediaItem.addEventListener('click', function(event) {
                    event.stopPropagation();
                    modalOverlay.style.display = "flex";
                    document.body.classList.add('body-no-scroll'); // Add this line here as well
                    modalTitle.textContent = item.title;
                    modalText.textContent = item.description;
                    modalVideoContainer.innerHTML = '';
                    modalVideoContainer.appendChild(video);
                    originalVideoContainer = mediaItem;
                    video.play();
                });
            }

            gridContainer.appendChild(mediaItem);
        });
    });

    // Listens for clicks on the modal overlay to close the modal
    modalOverlay.addEventListener('click', closeModalAndRestoreVideo);

    closeModalButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop the event from propagating to the overlay
        closeModalAndRestoreVideo();
    });

    // Ensure all videos are muted and play automatically
    document.querySelectorAll('video').forEach(video => {
        video.muted = true;
        video.setAttribute('playsinline', '');
        video.play().catch(error => console.error('Error attempting to play video:', error));
    });
});
