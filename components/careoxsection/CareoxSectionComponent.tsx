'use client';


import "./CareoxSection.css";
const img1 = '/assets/Heal-Conscious-Careox-Change-Management-768x846.png';;
const img2 = '/assets/Heal-Conscious-Careox-Stress-Management-768x693.png';;
const img3 = '/assets/Heal-Conscious-Careox-Anxiety-Management-768x709.png';;
const img4 = '/assets/Heal-Conscious-Careox-Mental-Fortification-768x606.png';;

const CareoxSectionComponent = () => {
  const data = [
    {
      img: img1,
      title: "Change Management",
      desc: "Taking small steps to make the right changes with the help of this program. Mainly because, with the help of modern health and wellness platforms, Careox provides you with guidance, resources, and tools to navigate the transitions confidently without losing balance during tough times.",
    },
    {
      img: img2,
      title: "Stress Management",
      desc: "Interestingly, with Careox, you enhance relationships, productivity, and overall wellbeing. While practicing the exercises, you will understand their worth by knowing different practical techniques, expert-backed support, and personalized exercises to reduce stress, restore emotional balance, and build resistance.",
    },
    {
      img: img3,
      title: "Anxiety Management",
      desc: "As it impacts our confidence, social interactions, and focus. With Careox, you work on all three elements and get the required results through proven strategies, personalized support, and mindfulness exercises. Careox is the solution that many wellbeing platforms ignore because they miss out on individual empowerment in managing anxiety and improving quality of life.",
    },
    {
      img: img4,
      title: "Mental Fortification",
      desc: "Happiness and long-term success are mainly possible through strong mental fitness. This is why Careox enhances focus, develops better and healthier thought patterns, and strengthens emotional resilience. With our health and wellness platform solutions, you get long-lasting support that enriches mental strength and overall wellbeing.",
    },
  ];

  return (
    <section className="careox-section">
      <div className="container">

        <h2 className="main-heading text-center">
          Who is Careox for?
        </h2>

        <div className="careox-flex">
          {data.map((item, index) => (
            <div className="careox-item" key={index}>
              
              <img src={item.img} alt={item.title} className="careox-img" />

              <h3 className="careox-title">{item.title}</h3>
              <p className="careox-desc">{item.desc}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CareoxSectionComponent;
