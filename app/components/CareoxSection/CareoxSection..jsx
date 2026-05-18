'use client';


import "./CareoxSection.css";
const img1 = '/assets/Heal-Conscious-Careox-Change-Management-768x846.png';;
const img2 = '/assets/Heal-Conscious-Careox-Stress-Management-768x693.png';;
const img3 = '/assets/Heal-Conscious-Careox-Anxiety-Management-768x709.png';;
const img4 = '/assets/Heal-Conscious-Careox-Mental-Fortification-768x606.png';;

const CareoxSection = () => {
  const data = [
    {
      img: img1,
      title: "Change Management",
      desc: "Some people do realise that something in their life needs to change – but don’t know where to start or how to do it right  Careox helps you take control back.",
    },
    {
      img: img2,
      title: "Stress Management",
      desc: "Feeling stressed, and struggling with negative thought patterns or feel overwhelmed with things going around you, Careox helps you manage, in just 2 hours a day.",
    },
    {
      img: img3,
      title: "Anxiety Management",
      desc: "Social Anxiety is often stemmed in low self-esteem as a result of your experiences in early life. Careox offers a mix of practices and exercises to put you up on your feet.",
    },
    {
      img: img4,
      title: "Mental Fortification",
      desc: "Steroids can get you a heavy physical outlook and a fully functional brain chemistry but it only goes so far, Careox helps you fortify your mind for perfect maintenance.",
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

export default CareoxSection;
