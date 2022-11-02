import React from "react";

import { Column, Row, Text, Img, Stack, List, Button, Line } from "components";
import { useNavigate } from "react-router-dom";

const PricingandcalendarPricepernightPage = () => {
  const navigate = useNavigate();

  function handleNavigate79() {
    navigate("/pricingandcalendarrateplans");
  }
  function handleNavigate80() {
    navigate("/pricingandcalendarno");
  }

  return (
    <>
      <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] lg:pb-[580px] xl:pb-[725px] 2xl:pb-[816px] 3xl:pb-[979px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-indigo_900 items-center lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
              <Row className="items-end lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]">
                <Text
                  className="lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-white_A700 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  HalalHoliday
                </Text>
                <Text
                  className="leading-[normal] lg:ml-[377px] xl:ml-[472px] 2xl:ml-[531px] 3xl:ml-[637px] mt-[1px] text-right text-white_A700 w-[26%]"
                  as="h3"
                  variant="h3"
                >
                  <span className="text-white_A700 font-ptsans font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                    Hanisah Property
                    <br />
                  </span>
                  <span className="text-white_A700 font-ptsans font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    Bangi Gateway, Bandar Baru Bangi, Selangor,43650
                  </span>
                </Text>
                <Img
                  src="images/img_expandarrow_19X20.png"
                  className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:mb-[17px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] ml-[3px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="ExpandArrow"
                />
                <Img
                  src="images/img_greatbritain.png"
                  className="lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] my-[4px] w-[3%]"
                  alt="GreatBritain"
                />
                <Row className="items-end justify-center xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:ml-[24px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[6%]">
                  <Text className="rowhelp" as="h6" variant="h6">
                    Help
                  </Text>
                  <Stack className="bg-amber_500 mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] outline outline-[2px] outline-white_A700 px-[1px] rounded-radius50 mdihomegroup">
                    <Img
                      src="images/img_questionmark.png"
                      className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-[0] justify-center m-[auto] w-[86%]"
                      alt="QuestionMark"
                    />
                  </Stack>
                </Row>
                <Img
                  src="images/img_maleuser.png"
                  className="lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[3%]"
                  alt="MaleUser"
                />
              </Row>
            </Row>
          </header>
          <Column className="items-center justify-start mt-[1px] w-[100%]">
            <Row className="items-center justify-evenly w-[100%]">
              <div className="bg-gray_50 3xl:h-[104px] lg:h-[62px] xl:h-[77px] 2xl:h-[87px] shadow-bs w-[3%]"></div>
              <List
                className="gap-[0] grid grid-cols-3 min-h-[auto] w-[57%]"
                orientation="horizontal"
              >
                <Row className="listnameandlocati">
                  <Text
                    className="lg:ml-[30px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] Box1"
                    variant="body4"
                  >
                    Name and location
                  </Text>
                  <Img
                    src="images/img_tiktokverified.png"
                    className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] mb-[1px] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mr-[3px] w-[14%]"
                    alt="TikTokVerified"
                  />
                </Row>
                <Row className="listnameandlocati">
                  <Text className="rowpropertysetup" variant="body4">
                    Property Setup
                  </Text>
                  <Img
                    src="images/img_tiktokverified.png"
                    className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] mb-[1px] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mr-[12px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[20px] w-[14%]"
                    alt="TikTokVerified One"
                  />
                </Row>
                <Row className="listnameandlocati">
                  <Text className="rowphotos" variant="body4">
                    Photos
                  </Text>
                  <Img
                    src="images/img_tiktokverified.png"
                    className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] mb-[1px] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mr-[31px] xl:mr-[39px] 2xl:mr-[44px] 3xl:mr-[52px] w-[14%]"
                    alt="TikTokVerified Two"
                  />
                </Row>
              </List>
              <Column className="bg-gray_50 items-center py-[1px] shadow-bs w-[19%]">
                <Column className="items-center justify-start lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[100%]">
                  <Text className="Box1" variant="body4">
                    Pricing and calendar
                  </Text>
                  <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                    <div className="bg-green_200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs2 w-[18%]"></div>
                    <div className="bg-green_200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs2 w-[18%]"></div>
                    <div className="bg-blue_A200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs2 w-[18%]"></div>
                    <div className="bg-gray_501 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs2 w-[18%]"></div>
                    <div className="bg-gray_501 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs2 w-[18%]"></div>
                  </Row>
                </Column>
              </Column>
              <Button
                className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                size="2xl"
                variant="OutlineBlack90026"
              >
                Review and complete
              </Button>
              <div className="bg-gray_50 3xl:h-[104px] lg:h-[62px] xl:h-[77px] 2xl:h-[87px] shadow-bs w-[3%]"></div>
            </Row>
            <Row className="items-start lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[86%]">
              <Column className="justify-start w-[76%]">
                <Row className="items-end justify-between w-[100%]">
                  <Column className="justify-start w-[64%]">
                    <Text className="Box1" as="h6" variant="h6">
                      Price per night
                    </Text>
                    <Column className="bg-white_A700 items-center justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
                      <Column className="justify-start 2xl:my-[11px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] w-[99%]">
                        <Text className="columndescription_one" variant="body3">
                          <span className="text-black_900 font-ptsans lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">
                            Properties that received bookings over the last year
                            and share similar features such as location,
                            facilities, and amenities to yours have usually had
                            pricing that falls between
                          </span>
                          <span className="text-black_900 font-ptsans font-bold lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">
                            {" "}
                            MYR 89.02 - MYR 146.14
                          </span>
                          <span className="text-black_900 font-ptsans lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">
                            , with a median price of{" "}
                          </span>
                          <span className="text-black_900 font-ptsans font-bold lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">
                            MYR 106.12
                          </span>
                          <span className="text-black_900 font-ptsans lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">
                            .{" "}
                          </span>
                        </Text>
                        <Line className="bg-bluegray_100 h-[1px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]" />
                        <Row className="items-center lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[61%]">
                          <Text className="Box1" variant="body3">
                            Did this help you decide on a price?
                          </Text>
                          <Img
                            src="images/img_thumbsup_30X30.png"
                            className="lg:ml-[19px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] bookmark"
                            alt="ThumbsUp"
                          />
                          <Img
                            src="images/img_thumbsdown.png"
                            className="bookmark"
                            alt="ThumbsDown"
                          />
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 items-center justify-start lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[31%]">
                    <Column className="justify-start lg:mb-[12px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[99%]">
                      <Row className="items-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[78%]">
                        <Img
                          src="images/img_idea.png"
                          className="mt-[1px] bookmark"
                          alt="Idea"
                        />
                        <Text className="rowidea1" variant="body3">
                          {`What if I'm not sure `}
                          <br />
                          about my price?
                        </Text>
                      </Row>
                      <Text className="columnidea1" variant="body5">
                        Don't worry, you can always change it later. You can
                        even set weekend, midweek and seasonal prices, giving
                        you more control over what you earn.
                      </Text>
                    </Column>
                  </Column>
                </Row>
                <Column className="items-center justify-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[64%]">
                  <Column className="bg-white_A700 items-center justify-end lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
                    <Column className="justify-start mt-[2px] w-[95%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body3"
                      >
                        How much do you want to charge per night?
                      </Text>
                      <Text className="Pastethelink" variant="body5">
                        Price guests pay
                      </Text>
                      <Row className="bg-white_A700 border border-black_900 border-solid items-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[100%]">
                        <Text
                          className="font-normal font-ptsans not-italic text-gray_800 w-[auto]"
                          variant="body4"
                        >
                          MYR
                        </Text>
                        <Line className="bg-bluegray_100 lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] my-[1px] w-[1px]" />
                        <Text
                          className="font-light font-roboto ml-[4px] text-black_900 w-[auto]"
                          variant="body4"
                        >
                          xx
                        </Text>
                      </Row>
                      <Text
                        className="font-normal xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] not-italic text-gray_800 w-[auto]"
                        variant="body4"
                      >
                        Including taxes, commission and charges
                      </Text>
                    </Column>
                  </Column>
                  <Column className="items-center justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                      <Row className="items-center justify-between lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[100%]">
                        <Stack
                          className="common-pointer bg-white_A700 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] outline outline-[1px] outline-light_blue_500 xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] shadow-bs w-[13%]"
                          onClick={handleNavigate80}
                        >
                          <Img
                            src="images/img_expandarrow.png"
                            className="ExpandArrow_One"
                            alt="ExpandArrow One"
                          />
                        </Stack>
                        <Button
                          className="common-pointer font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[84%]"
                          onClick={handleNavigate79}
                          size="xl"
                          variant="FillBluegray101"
                        >
                          Continue
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-blue_50 items-end justify-start lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[152px] xl:mt-[191px] 2xl:mt-[215px] 3xl:mt-[258px] p-[3px] shadow-bs w-[24%]">
                <Column className="justify-start xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mb-[9px] mt-[2px] w-[95%]">
                  <Row className="items-start justify-between ml-[4px] w-[99%]">
                    <Text className="rowdescription2" variant="body6">
                      Is there anything preventing you from <br />
                      completing your registration at this <br />
                      point?
                    </Text>
                    <Img
                      src="images/img_multiply.png"
                      className="Multiply"
                      alt="Multiply"
                    />
                  </Row>
                  <Button
                    className="font-bold lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[42%]"
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

export default PricingandcalendarPricepernightPage;
