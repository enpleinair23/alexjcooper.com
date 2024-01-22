import { TokyoContext } from "@/src/Context";
import { useContext } from "react";

const services = [
  {
    id: 1,
    name: "Video Production",
    text: [
      "Video production is a multifaceted process that involves planning, shooting, and editing to create visual content for various purposes. It encompasses a wide range of activities, from conceptualization and scripting to the final delivery of a polished video.",
      "Video production begins with pre-production, where ideas are transformed into a concrete plan. This stage involves concept development, scriptwriting, storyboarding, and planning logistics such as locations, casting, and equipment.",
      "Once the groundwork is laid, the production phase involves bringing the plan to life through the use of cameras, lighting, sound equipment, and other tools. This stage includes shooting interviews, capturing b-roll footage, and ensuring that the visuals align with the creative vision.",
    ],
    image: "assets/img/news/1.jpg",
  },
  {
    id: 2,
    name: "Video Editing",
    text: [
      "Video editing is the creative and technical process of manipulating raw video footage to produce a polished and visually cohesive final product. This process involves various stages, from organizing and selecting clips to applying effects and fine-tuning audio.",
      "Beginning with the importation of video clips into specialized editing software, the editor meticulously organizes the material into a logical sequence on a timeline. Cutting and trimming then ensue, refining the content by removing unnecessary elements and ensuring a smooth and engaging flow.",
      "Video editing is an art form that combines technical proficiency with creative expression, resulting in a polished and compelling visual piece ready for sharing on various platforms.",
    ],
    image: "assets/img/news/2.jpg",
  },
  {
    id: 3,
    name: "Colour Grading",
    text: [
      "Colour grading is a crucial step in the video editing process that involves the adjustment and enhancement of the colour and tone of a video to achieve a desired visual style or mood.",
      "The primary goals of colour grading include achieving visual consistency across different scenes, correcting any colour imbalances introduced during filming, and enhancing the overall aesthetic appeal of the video.",
      "Colour grading often involves working with colour wheels, curves, and sliders to fine-tune the shadows, midtones, and highlights of the video. It allows for the isolation and adjustment of specific colours within the frame, enabling editors to emphasize certain elements or create visual focal points.",
    ],
    image: "assets/img/news/3.jpg",
  },
  {
    id: 4,
    name: "Motion Graphics",
    text: [
      "Motion Graphics involves the use of digital techniques to bring static graphics, text, and images to life through movement, transitions, and effects.",
      "Here are key aspects and characteristics of motion graphics:",
      "Animation: Motion graphics heavily rely on animation, where various visual elements move, rotate, scale, and transform over time. This can include 2D or 3D animation, giving depth and dimension to the visuals.",
      "Graphic Design Elements: The foundation of motion graphics is built on graphic design principles. Elements such as typography, shapes, colors, and images are carefully crafted and arranged to convey a message or tell a story.",
    "Transitions and Timing: Timing is crucial in motion graphics. Smooth transitions, well-timed movements, and synchronization with audio contribute to the overall effectiveness of the piece. The pacing and rhythm of the motion help guide the viewer's attention."
    ],
    image: "assets/img/news/4.jpg",
  },
];
const ServiceItems = () => {
  const { setServiceModal, modalToggle, modal } = useContext(TokyoContext);
  return (
    <div className="list w-full h-auto clear-both float-left">
      <ul className="ml-[-40px] list-none flex flex-wrap">
        {services.map((service) => (
          <li className="mb-[40px] w-1/3 pl-[40px]" key={service.id}>
            <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
              <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                {service.id <= 9 ? `0${service.id}` : service.id}
              </span>
              <h3 className="title font-bold text-black text-[18px] mb-[15px]">
                {service.name}
              </h3>
              <p className="text">{service.text[0].slice(0, 70)}...</p>
              <div className="tokyo_tm_read_more">
                <a
                  href="#"
                  onClick={() => {
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                >
                  <span>Read More</span>
                </a>
              </div>
              <a
                className="tokyo_tm_full_link"
                href="#"
                onClick={() => {
                  modalToggle(true);
                  setServiceModal(service);
                }}
              />
              {/* Service Popup Start */}
              <img
                className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                src={service.image}
                alt="image"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceItems;
