import NewArrivalDetails from "./NewArrivalDetails";

function NewArrivalImg() {
  return (
    <div className="mt-15">
      <div className="flex justify-between">
        {/* PlayStation 5 */}
        <div className="w-[570px] h-[600px] bg-black relative flex justify-center items-end rounded">
          <img
            src="/assets/NewArrival-img/ps5.svg"
            className="size-[511px]"
            alt="PlayStation 5"
          />
          <NewArrivalDetails
            title="PlayStation 5"
            description="Black and White version of the PS5 coming out on sale."
          />
        </div>

        {/* Right side */}
        <div>
          {/* Women’s Collections */}
          <div className="w-[570px] h-[284px] bg-[#0D0D0D] relative flex justify-end items-end rounded">
            <img
              src="/assets/NewArrival-img/women.svg"
              alt="Women’s Collections"
            />
            <NewArrivalDetails
              title="Women’s Collections"
              description="Featured woman collections that give you another vibe."
            />
          </div>

          {/* Speakers + Perfume */}
          <div className="mt-8 flex gap-8">
            <div className="w-[270px] h-[284px] bg-[#0D0D0D] relative flex justify-center items-center rounded">
              <img
                src="/assets/NewArrival-img/speaker.svg"
                alt="Speakers"
              />
              <NewArrivalDetails
                title="Speakers"
                description="Amazon wireless speakers"
              />
            </div>
            <div className="w-[270px] h-[284px] bg-[#0D0D0D] relative flex justify-center items-center rounded">
              <img
                src="/assets/NewArrival-img/perfume.svg"
                alt="Perfume"
              />
              <NewArrivalDetails
                title="Perfume"
                description="GUCCI INTENSE OUD EDP"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrivalImg;
