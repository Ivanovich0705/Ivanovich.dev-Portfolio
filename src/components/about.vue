<template>

    <div id="about" data-aos="fade-up">
          <div className="section-header ">
            <span className="section-title">/ about </span>
          </div>
          <div className="about-content">
            <div className="about-description">
                <p>
                    I am currently a third year <b style="color: var(--green-bright)">Engineer Software</b> major at the 
                    <a target="_blank" href="https://www.upc.edu.pe/en/nosotros/pilares-estrategicos/exigencia/">
                      Peruvian University of Applied Sciences</a>. 
                    After graduation, I will be joining{" "}
                    <a href="https://www.aboutamazon.com/">Amazon</a> as a{" "}
                    <b>Software Development Engineer</b> while undertaking a part-time
                    <b> Master's of Science</b> in <b>Software Engineering </b>at{" "}
                    <a href="https://www.ox.ac.uk/about">University of Oxford</a>.
                </p>
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <div data-aos-delay="800">
                      <li>{tech_item}</li>
                    </div>
                  );
                })}
              </ul>
              <p>
                Outside of work, I'm interested in following the developments of
                science. I also play a lot of video games. And make TikToks.
              </p>
            </div>
            <div className="about-image">
              <img  />
            </div>
          </div>
      </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=NTR&display=swap');


#about {
    padding-left: 15%;
    padding-right: 25%;
    min-height: 60vh;
    font-family: "NTR";
    font-weight: 200;
    font-display: fallback;
}

.about-description ul {
    padding-top: 20px;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(2, minmax(150px, 10px));
}

.about-description li {
    position: relative;
    padding-left: 20px;
    font-size: 18px;
    color: var(--slate);
}

.about-description li::before {
    content: "▹    ";
    color: var(--green-bright);
    position: absolute;
    left: 0;
}

.about-content {
    display: flex;
    flex-direction: row;
}

.about-description {
    font-family: "NTR", sans-serif;
    color: var(--slate);
    max-width: 600px;
    font-size: 22px;
    text-align: justify;
    margin: 0;
}

.about-description a,
.about-description b {
    font-size: 21px;
    font-weight: bold;
}

.about-image {
    padding-left: 40px;
}

.about-image img {
    max-width: 300px;
    height: auto;
    border-radius: 10px;
    margin-left: 30px;
    box-shadow: 6px 13px 23px -5px rgba(0, 0, 0, 0.46);
    border: none;
}

@media only screen and (max-width: 788px) {
    .about-image img {
        max-width: 200px;
    }
}

.about-image:hover {
transform: translateY(-7px);
}

@media only screen and (max-width: 600px) {
    #about {
        height: unset;
        padding-left: unset;
        padding-right: unset;
        padding-top: 30%;
    }

    .about-description {
        font-size: 18px;
        text-align: justify;
    }

    .about-description a,
    .about-description b {
        font-size: 17px;
    }

    .about-image img {
        display: none;
    }

    .about-content {
        display: unset;
    }
}
  
</style>