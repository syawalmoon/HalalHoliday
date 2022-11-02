import React from "react";

import { Stack, Column, Text, Row, Img, Button, Line, Input } from "components";
import Header4 from "components/Header/Header4";
import Footer2 from "components/Footer/Footer2";
import { useNavigate } from "react-router-dom";

const AddpropertyOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate33() {
    navigate("/grouphomepageone");
  }
  function handleNavigate34() {
    navigate("/grouphomepageone");
  }

  return (
    <>
      <Stack className="bg-gray_50 font-ptsans 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] mx-[auto] w-[100%]">
        <Stack className="absolute bottom-[0] 2xl:h-[1023px] 3xl:h-[1228px] lg:h-[727px] xl:h-[910px] w-[100%]">
          <Column className="absolute inset-x-[0] justify-start mx-[auto] top-[18%] w-[78%]">
            <Text className="columngrouphomepage" variant="body1">
              Group homepage
            </Text>
            <Column className="bg-white_A700_99 items-center justify-start 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] pl-[2px] py-[2px] w-[100%]">
              <Column className="justify-start lg:mb-[13px] xl:mb-[16px] 2xl:mb-[19px] 3xl:mb-[22px] w-[99%]">
                <Row className="items-end w-[100%]">
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[2%]"
                    alt="mobile"
                  />
                  <Text className="rowmobile" variant="body6">
                    Create mobile rates to promotes your properties to guests
                    booking on phones.
                  </Text>
                  <Img
                    src="images/img_close_36X33.svg"
                    className="lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[398px] xl:ml-[498px] 2xl:ml-[560px] 3xl:ml-[672px] w-[3%]"
                    alt="close"
                  />
                </Row>
                <Column className="justify-start lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] mt-[3px] w-[41%]">
                  <Text className="columneachpropertyw" variant="body8">
                    Each property with a mobile rate can see, on average, adsfs
                    26% increase in its bookings.
                  </Text>
                  <Button
                    className="font-bold font-inter lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[39%]"
                    shape="RoundedBorder2"
                    size="md"
                    variant="OutlineBlue600"
                  >
                    Select 1 eligible property
                  </Button>
                </Column>
              </Column>
            </Column>
            <Row className="font-inter items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
              <Column className="bg-white_A700 border border-gray_503 border-solid lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius3 w-[44%]">
                <Text className="columnfilterbyprope" variant="body6">
                  Filter by property ID, name or location
                </Text>
              </Column>
              <Row className="font-ptsans items-start justify-center lg:ml-[364px] xl:ml-[455px] 2xl:ml-[512px] 3xl:ml-[614px] w-[8%]">
                <Img
                  src="images/img_download.svg"
                  className="download"
                  alt="download"
                />
                <Text className="Download" variant="body6">
                  Download
                </Text>
              </Row>
              <Img
                src="images/img_overflowmenu.svg"
                className="xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] download"
                alt="overflowmenu"
              />
            </Row>
            <Stack className="font-inter lg:h-[107px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
              <Stack className="absolute lg:h-[107px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] w-[100%]">
                <div className="absolute bg-white_A700 lg:h-[107px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] right-[0] w-[100%]"></div>
                <Line className="absolute bg-gray_503 h-[1px] top-[45%] w-[100%]" />
              </Stack>
              <Row className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[95%]">
                <Column className="items-center justify-start w-[5%]">
                  <Column className="items-end justify-start w-[100%]">
                    <Row className="items-start justify-end ml-[auto] w-[71%]">
                      <Text className="rowid" variant="body6">
                        ID
                      </Text>
                      <Img
                        src="images/img_arrowup.svg"
                        className="arrowup"
                        alt="arrowup"
                      />
                    </Row>
                    <Text className="columnid" variant="body6">
                      374474
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[1px] pb-[1px] w-[14%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columnname" variant="body6">
                      Name
                    </Text>
                    <Row className="items-center justify-evenly lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[97%]">
                      <div className="bg-gray_901 rounded-radius50 bookmark"></div>
                      <Stack className="lg:h-[25px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[41px] w-[77%]">
                        <Text className="DConceptHotel" variant="body6">
                          D’Concept Hotel
                          <br />
                          Kulim
                        </Text>
                        <Text className="Genius" variant="body6">
                          Genius
                        </Text>
                      </Stack>
                    </Row>
                    <Row className="font-ptsans items-end justify-end ml-[auto] mt-[1px] w-[77%]">
                      <Line className="bg-light_green_A700_c4 h-[3px] mb-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] rotate-[1deg] w-[64%]" />
                      <Text className="percentage" variant="body6">
                        100%
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[1px] w-[20%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columnlocation" variant="body6">
                      Location
                    </Text>
                    <Row className="font-ptsans items-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]">
                      <Img
                        src="images/img_television.svg"
                        className="television"
                        alt="television"
                      />
                      <Text className="rowtelevision" variant="body6">
                        No.4, Jalan KLC Satu (1), Kulim
                        <br />
                        Landmark Central, 09000 Kulim, <br />
                        Kedah, Darul Aman, Kulim
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="justify-start lg:ml-[26px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[6%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body6"
                  >
                    Status
                  </Text>
                  <Text className="OpenBookable" variant="body6">
                    Open/
                    <br />
                    Bookable
                  </Text>
                </Column>
                <Column className="items-center justify-start lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[15%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columnarrivalsdepart" variant="body6">
                      Arrivals/Departures for
                      <br />
                      today & tomorrow
                    </Text>
                    <Row className="items-center lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[48%]">
                      <Text className="rowsix" variant="body6">
                        6
                      </Text>
                      <Text className="Five" variant="body6">
                        5
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="justify-start lg:ml-[49px] xl:ml-[61px] 2xl:ml-[69px] 3xl:ml-[82px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[7%]">
                  <Text className="columnarrivalsdepart" variant="body6">
                    Guest <br />
                    Messages
                  </Text>
                  <Text className="Two" variant="body6">
                    2
                  </Text>
                </Column>
                <Column className="items-center justify-start lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[11%]">
                  <Text className="columnarrivalsdepart" variant="body6">
                    Halalholiday.com
                    <br />
                    messages
                  </Text>
                  <Text className="Zero1" variant="body6">
                    0
                  </Text>
                </Column>
              </Row>
            </Stack>
          </Column>
          <Column className="absolute bg-black_900_7f items-center justify-start pb-[1px] pr-[1px] w-[100%]">
            <Column className="justify-start lg:mb-[265px] xl:mb-[331px] 2xl:mb-[373px] 3xl:mb-[447px] w-[100%]">
              <Header4 className="w-[100%]" />
              <Column className="bg-white_A700 items-center justify-start lg:ml-[278px] xl:ml-[347px] 2xl:ml-[391px] 3xl:ml-[469px] lg:mt-[118px] xl:mt-[147px] 2xl:mt-[166px] 3xl:mt-[199px] p-[1px] shadow-bs4 w-[38%]">
                <Column className="items-center justify-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Row className="items-end justify-between w-[91%]">
                      <Text className="rowaddproperty" variant="body1">
                        Add property
                      </Text>
                      <Img
                        src="images/img_close_36X33.svg"
                        className="common-pointer lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[5%]"
                        onClick={handleNavigate33}
                        alt="close One"
                      />
                    </Row>
                    <Line className="bg-gray_400 h-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]" />
                  </Column>
                </Column>
                <Column className="justify-start lg:my-[20px] xl:my-[25px] 2xl:my-[29px] 3xl:my-[34px] w-[91%]">
                  <Column className="justify-start rounded-radius3 w-[100%]">
                    <Text className="Box1" variant="body6">
                      Property name
                    </Text>
                    <Input
                      className="placeholder:text-black_900 GroupSixtyNine"
                      wrapClassName="mt-[3px] w-[100%]"
                      type="text"
                      name="Group146"
                      placeholder="Property Name"
                      shape="RoundedBorder3"
                      size="md"
                      variant="OutlineGray503"
                    ></Input>
                  </Column>
                  <Column className="justify-start 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] rounded-radius3 w-[100%]">
                    <Text className="Box1" variant="body6">
                      Your first and last name
                    </Text>
                    <Input
                      className="placeholder:text-black_900 GroupSixtyNine"
                      wrapClassName="mt-[4px] w-[100%]"
                      name="Group147"
                      placeholder="de Concept Hotel Kulim"
                      shape="RoundedBorder3"
                      size="md"
                      variant="OutlineGray503"
                    ></Input>
                  </Column>
                  <Column className="justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-radius3 w-[100%]">
                    <Text className="Box1" variant="body6">
                      Your email address
                    </Text>
                    <Input
                      className="placeholder:text-black_900 GroupSixtyNine"
                      wrapClassName="mt-[3px] w-[100%]"
                      type="email"
                      name="email"
                      placeholder="deconceptkulim@gmail.com"
                      shape="RoundedBorder3"
                      size="md"
                      variant="OutlineGray503"
                    ></Input>
                  </Column>
                  <Button
                    className="common-pointer font-bold lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] rounded-radius2 xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[34%]"
                    onClick={handleNavigate34}
                    size="lg"
                    variant="FillLightblue800"
                  >
                    Build your property
                  </Button>
                </Column>
              </Column>
            </Column>
          </Column>
        </Stack>
        <Footer2 className="absolute bg-indigo_900 bottom-[0] w-[100%]" />
      </Stack>
    </>
  );
};

export default AddpropertyOnePage;
