import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";


export type InstructorValue = {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
};

export type InstructorProps = {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: InstructorValue[];
};

const Instructor = ({ instructor }: { instructor: InstructorProps }) => {
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold md:text-2xl">{instructor.name}</h2>
      <div className="flex items-center gap-4 border border-gray-300 p-5">
        <div>
          <Image
            src={instructor.values[0].image}
            width={73}
            height={73}
            alt={instructor.values[0].slug}
            className="rounded-full"
          />
        </div>
        <div>
          <div className="flex items-center text-lg font-medium hover:text-green-600">
            <Link href={"/"}>{instructor.values[0].name}</Link>
            <IoIosArrowForward size={20}/>
          </div>
          <div
            className="text-sm font-medium"
            dangerouslySetInnerHTML={{
              __html: instructor.values[0].description,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Instructor;
