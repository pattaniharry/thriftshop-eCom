import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

function page() {
  return (
    <div>
      <div className="main">
        <div className="faq-section pt-[150px]">
          <div className="section-header text-center font-bold text-[#323232] pb-[30px]  ">
            <h1 className="border-b-1 max-w-fit m-auto">
              Frequently Asked Question
            </h1>
          </div>
          <div className="section-body flex flex-col text-center max-w-[400px] m-auto">
            <Disclosure>
              <DisclosureButton className="py-2 text-[28px]">
                Is team pricing available?
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500 ">
                Yes! You can purchase a license that you can share with your
                entire team.
              </DisclosurePanel>
            </Disclosure>
            <Disclosure>
              <DisclosureButton className="py-2 text-[28px]">
                Is team pricing available?
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500">
                Yes! You can purchase a license that you can share with your
                entire team.
              </DisclosurePanel>
            </Disclosure>
            <Disclosure>
              <DisclosureButton className="py-2 text-[28px]">
                Is team pricing available?
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500">
                Yes! You can purchase a license that you can share with your
                entire team.
              </DisclosurePanel>
            </Disclosure>
            <Disclosure>
              <DisclosureButton className="py-2 text-[28px]">
                Is team pricing available?
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500">
                Yes! You can purchase a license that you can share with your
                entire team.
              </DisclosurePanel>
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
