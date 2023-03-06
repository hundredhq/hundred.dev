import React, { FC } from "react";
import Checkbox from "./Utils/components/Checkbox";
import { useRouter } from "next/router";
import Link from "next/link";

function scrollToTargetId(id: string) {
  var element = document.getElementById(id);
  var headerOffset = 120;
  var elementPosition: any = element?.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
const ComponentsSection: FC<{ title: string; desc: string; componentType: { name: string; typeId: string }[] }> = ({
  title,
  desc,
  componentType,
}) => {
  const [sltCmpType, setSltCmpType] = React.useState<string>("");
  const router = useRouter();
  const { type, section } = router.query as { type: string; section: string };

  // React.useEffect(() => {
  //   scrollToTargetId(type);
  // }, [type, section]);
  return (
    <section id={type as string} className='px-20 py-16'>
      <h2 className='text-2xl mb-2 text-gray-800'>{title}</h2>
      <p className='text-md text-gray-600 mb-10'>{desc}</p>

      <div className='flex'>
        <div className='basis-1/4'>
          <div>
            {componentType.map((c, i) => {
              return (
                <Link href={`/components/${type}/${c.typeId}`} key={i}>
                  <div
                    onClick={() => setSltCmpType(c.typeId)}
                    className={`mb-5 text-md py-3 px-4  rounded-lg w-60 hover:bg-[#fc8936] cursor-pointer ${
                      sltCmpType === c.typeId ? "bg-[#fc8936]" : "bg-[#ddd]"
                    }`}>
                    {c.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className='basis-3/4'></div>
      </div>
    </section>
  );
};

export default ComponentsSection;
