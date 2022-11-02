import React from "react";

import { Column, Row, Text, Img, Line, Stack, Button } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const PricingandcalendarNoOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/pricingandcalendarpricepernightone");
  }
  function handleNavigate2() {
    navigate("/photosimportphotosone");
  }
  function handleNavigate3() {
    navigate("/photosimportphotosone");
  }
  function handleNavigate4() {
    navigate("/pricingandcalendaryesone");
  }

  return (
    <>
      <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] lg:pb-[23px] xl:pb-[29px] 2xl:pb-[33px] 3xl:pb-[39px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="justify-start w-[100%]">
            <Row className="items-center justify-evenly w-[100%]">
              <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[3%]"></div>
              <Row className="bg-gray_50 items-center justify-center lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] shadow-bs w-[19%]">
                <Text className="Step11" variant="body4">
                  Name and location
                </Text>
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark2"
                  alt="checkmark"
                />
              </Row>
              <Row className="bg-gray_50 items-center justify-center lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] shadow-bs w-[19%]">
                <Text className="Step22" variant="body4">
                  Property Setup
                </Text>
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark_One1"
                  alt="checkmark One"
                />
              </Row>
              <Row className="bg-gray_50 items-center justify-center lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] shadow-bs w-[19%]">
                <Text className="Step31" variant="body4">
                  Photos
                </Text>
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark_Two"
                  alt="checkmark Two"
                />
              </Row>
              <Column className="bg-gray_50 items-center lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] shadow-bs w-[19%]">
                <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text className="Box1" variant="body4">
                    Pricing and calendar
                  </Text>
                  <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                    <Line className="bg-blue_A200 h-[5px] shadow-bs2 w-[24%]" />
                    <Line className="bg-gray_501 h-[5px] shadow-bs2 w-[24%]" />
                    <Line className="bg-gray_501 h-[5px] shadow-bs2 w-[24%]" />
                    <Line className="bg-gray_501 h-[5px] shadow-bs2 w-[24%]" />
                  </Row>
                </Column>
              </Column>
              <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[19%]"></div>
              <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[3%]"></div>
            </Row>
            <Row className="items-start justify-end ml-[auto] xl:mt-[117px] 2xl:mt-[132px] 3xl:mt-[158px] lg:mt-[93px] w-[88%]">
              <Column className="items-center justify-start w-[45%]">
                <Column className="justify-start w-[100%]">
                  <Text className="Airbnb" variant="body1">
                    Guest payment options
                  </Text>
                  <Column className="bg-white_A700 items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:p-[29px] xl:p-[36px] 2xl:p-[41px] 3xl:p-[49px] shadow-bs w-[100%]">
                    <Column className="justify-start lg:mb-[32px] xl:mb-[40px] 2xl:mb-[46px] 3xl:mb-[55px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[98%]">
                      <Text className="Whattypeofbr" variant="body4">
                        Are you able to charge credit cards at your property?
                      </Text>
                      <Row className="font-ptsans items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[13%]">
                        <Img
                          src="images/img_round.png"
                          className="common-pointer bookmark"
                          onClick={handleNavigate4}
                          alt="Round"
                        />
                        <Text className="rowround" variant="body4">
                          Yes
                        </Text>
                      </Row>
                      <Row className="font-ptsans items-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[12%]">
                        <Img
                          src="images/img_record.png"
                          className="bookmark"
                          alt="Record"
                        />
                        <Text className="columnyesillimpor" variant="body4">
                          No
                        </Text>
                      </Row>
                      <Line className="bg-gray_200 h-[1px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[100%]" />
                      <Text
                        className="lg:mt-[36px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] Whattypeofbr"
                        variant="body4"
                      >
                        No problem! Allow your guests to pay online
                      </Text>
                      <Text
                        className="lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] columneachpropertyw"
                        variant="body6"
                      >
                        You can have guests pay via Payments by
                        HalalHoliday.com.
                      </Text>
                      <Text
                        className="font-hairline font-roboto leading-[normal] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] text-black_900 w-[25%]"
                        variant="body6"
                      >
                        <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          Payment charge
                          <br />
                        </span>
                        <span className="text-black_900 font-ptsans font-bold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                          2.5%
                        </span>
                        <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                          {" "}
                        </span>
                        <span className="text-light_blue_500 font-ptsans font-normal not-italic lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                          Learn more
                        </span>
                      </Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <Column
                    className="common-pointer items-center justify-start w-[100%]"
                    onClick={handleNavigate1}
                  >
                    <Line className="bg-gray_200 h-[1px] w-[100%]" />
                    <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Stack
                        className="common-pointer bg-white_A700 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] outline outline-[1px] outline-light_blue_500 3xl:px-[10px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px] shadow-bs w-[13%]"
                        onClick={handleNavigate2}
                      >
                        <Img
                          src="images/img_arrowleft.svg"
                          className="common-pointer arrowleft"
                          onClick={handleNavigate3}
                          alt="arrowleft"
                        />
                      </Stack>
                      <Button
                        className="font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[84%]"
                        size="xl"
                        variant="FillLightblue800"
                      >
                        Continue
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Row className="bg-white_A700 font-roboto items-start lg:mb-[46px] xl:mb-[57px] 2xl:mb-[65px] 3xl:mb-[78px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] shadow-bs w-[27%]">
                <Img
                  src="images/img_lightbulb.svg"
                  className="lightbulb"
                  alt="lightbulb"
                />
                <Stack className="lg:h-[375px] xl:h-[468px] 2xl:h-[527px] 3xl:h-[632px] 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[82%]">
                  <Text
                    className="absolute font-semibold h-[max-content] inset-[0] justify-center leading-[normal] m-[auto] text-black_900 w-[98%]"
                    variant="body4"
                  >
                    <span className="text-black_900 font-ptsans font-bold lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                      How does Payments by HalalHoliday.com work?
                      <br />
                    </span>
                    <span className="text-black_900 font-ptsans font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                      <br />
                    </span>
                    <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                      1. Guest books
                      <br />
                      <br />A guest books your property using their preferred
                      payment method.
                      <br />
                      <br />
                      <br />
                      2. HalalHoliday.com facilitates payment
                      <br />
                      <br />
                      We facilitate the guest’s payment on your behalf, ensuring
                      they pay in full before arrival.
                      <br />
                      <br />
                      <br />
                      3. You get paid
                      <br />
                      <br />
                      {`After the guest checks out you'll be paid by bank transfer within 7 business days.`}
                      <br />
                      <br />
                      <br />
                      Your bank details can be added in the finance section of
                      the extranet. We’ll also remind you after your first
                      booking.
                    </span>
                  </Text>
                  <Img
                    src="images/img_close.svg"
                    className="close"
                    alt="close"
                  />
                </Stack>
              </Row>
              <Column className="bg-blue_50 font-ptsans justify-start lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] lg:mt-[342px] xl:mt-[427px] 2xl:mt-[481px] 3xl:mt-[577px] p-[4px] shadow-bs w-[23%]">
                <Img
                  src="images/img_close.svg"
                  className="close_One"
                  alt="close One"
                />
                <Column className="justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mx-[auto] w-[92%]">
                  <Text className="columndescription_two" variant="body4">
                    Is there anything preventing you from <br />
                    completing your registration at this <br />
                    point?
                  </Text>
                  <Button
                    className="font-bold lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[44%]"
                    size="xl"
                    variant="OutlineLightblue500"
                  >
                    Let us know
                  </Button>
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default PricingandcalendarNoOnePage;
