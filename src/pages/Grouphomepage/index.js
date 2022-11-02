import React from "react";

import { Column, Text, Row, Img, Button, Stack, Line, Input } from "components";
import Header4 from "components/Header/Header4";
import Footer1 from "components/Footer/Footer1";
import { useNavigate } from "react-router-dom";

const GrouphomepagePage = () => {
  const navigate = useNavigate();

  function handleNavigate72() {
    navigate("/propertycategorypage");
  }

  return (
    <>
      <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header4 className="w-[100%]" />
          <Column className="justify-start lg:mt-[49px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] w-[100%]">
            <Text
              className="font-bold lg:ml-[108px] xl:ml-[135px] 2xl:ml-[152px] 3xl:ml-[182px] text-black_900 w-[auto]"
              variant="body1"
            >
              Group homepage
            </Text>
            <Column className="bg-white_A700 items-center justify-start lg:ml-[108px] xl:ml-[135px] 2xl:ml-[152px] 3xl:ml-[182px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] shadow-bs5 w-[78%]">
              <Column className="justify-start lg:mb-[10px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] w-[99%]">
                <Row className="items-end w-[100%]">
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[2%]"
                    alt="mobile"
                  />
                  <Text className="rowmobile1" variant="body6">
                    Create mobile rates to promotes your properties to guests
                    booking on phones.
                  </Text>
                  <Img
                    src="images/img_close_36X33.svg"
                    className="h-10 lg:h-[15px] xl:h-[15px] 2xl:h-[37px] 3xl:h-[44px] mb-[4px] lg:ml-[398px] xl:ml-[550px] 2xl:ml-[560px] 3xl:ml-[672px] w-[3%]"
                    alt="close"
                  />
                </Row>
                <Column className="justify-start lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] mt-[3px] w-[39%]">
                  <Text className="columneachpropertyw" variant="body8">
                    Each property with a mobile rate can see, on average, a 26%
                    increase in its bookings.
                  </Text>
                  <Button
                    className="font-bold font-inter lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[40%]"
                    shape="RoundedBorder2"
                    size="md"
                    variant="OutlineBlue600"
                  >
                    Select 1 eligible property
                  </Button>
                </Column>
              </Column>
            </Column>
            <Text
              className="font-bold lg:ml-[108px] xl:ml-[135px] 2xl:ml-[152px] 3xl:ml-[182px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] text-black_900 w-[auto]"
              variant="body1"
            >
              Properties in progress (1)
            </Text>
            <Stack className="2xl:h-[111px] 3xl:h-[133px] lg:h-[79px] xl:h-[98px] lg:ml-[107px] xl:ml-[134px] 2xl:ml-[151px] 3xl:ml-[181px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[78%]">
              <Column className="absolute bg-white_A700 justify-end left-[0] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] shadow-bs5 w-[100%]">
                <Column className="justify-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mt-[1px] w-[88%]">
                  <Row className="items-start w-[73%]">
                    <Text
                      className="font-bold my-[1px] text-black_900 w-[auto]"
                      variant="body6"
                    >
                      Name
                    </Text>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[3px] w-[1%]"
                      alt="arrowdown"
                    />
                    <Text
                      className="font-bold mb-[1px] lg:ml-[132px] xl:ml-[165px] 2xl:ml-[186px] 3xl:ml-[223px] text-black_900 w-[auto]"
                      variant="body6"
                    >
                      Location
                    </Text>
                    <Text
                      className="2xl:ml-[101px] 3xl:ml-[121px] lg:ml-[71px] xl:ml-[89px] rowid"
                      variant="body6"
                    >
                      Registration progress
                    </Text>
                    <Text
                      className="font-bold mb-[1px] lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] text-black_900 w-[auto]"
                      variant="body6"
                    >
                      Action
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]">
                    <Row className="items-center justify-between w-[30%]">
                      <Row className="items-center w-[47%]">
                        <Text
                          className="bg-gray_901 flex font-bold items-center lg:px-[20px] xl:px-[5px] 2xl:px-[1px] 3xl:px-[8px] rounded-radius50 text-white_A700 w-[20px]"
                          variant="body6"
                        >
                          FP
                        </Text>
                        <Text
                          className="font-bold xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] text-black_900 w-[auto]"
                          variant="body6"
                        >
                          Fairuz Property
                        </Text>
                      </Row>
                      <Text className="Box1" variant="body6">
                        Malaysia
                      </Text>
                    </Row>
                    <Row className="items-start justify-center 2xl:ml-[100px] 3xl:ml-[120px] lg:ml-[71px] xl:ml-[88px] w-[21%]">
                      <Line className="bg-red_801 h-[3px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[15%]" />
                      <Line className="bg-gray_500_4c h-[3px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[65%]" />
                      <Text className="ProgressPercen" variant="body6">
                        10%
                      </Text>
                    </Row>
                    <Text
                      className="common-pointer font-normal lg:ml-[52px] xl:ml-[65px] 2xl:ml-[74px] 3xl:ml-[88px] not-italic text-blue_600 w-[auto]"
                      variant="body6"
                      onClick={handleNavigate72}
                    >
                      Continue registration
                    </Text>
                    <Img
                      src="images/img_trash.svg"
                      className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[78px] xl:ml-[98px] w-[1%]"
                      alt="trash"
                    />
                    <Text
                      className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic text-red_801 w-[auto]"
                      variant="body6"
                    >
                      Delete
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Line className="absolute bg-gray_503 h-[1px] top-[44%] w-[100%]" />
            </Stack>
            <Text
              className="font-bold lg:ml-[107px] xl:ml-[134px] 2xl:ml-[151px] 3xl:ml-[181px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] text-black_900 w-[auto]"
              variant="body1"
            >
              Active properties
            </Text>
            <Row className="font-inter items-center lg:ml-[108px] xl:ml-[135px] 2xl:ml-[152px] 3xl:ml-[182px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[78%]">
              <Input
                className="placeholder:text-gray_503 GroupSixtyTwo"
                wrapClassName="w-[45%]"
                type="text"
                name="GroupSixtyTwo"
                placeholder="Filter by property ID, name or location"
                shape="RoundedBorder3"
                size="md"
                variant="OutlineGray503"
              ></Input>
              <Row className="font-ptsans items-start justify-center lg:ml-[362px] xl:ml-[453px] 2xl:ml-[510px] 3xl:ml-[612px] w-[8%]">
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
                className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] download"
                alt="overflowmenu"
              />
            </Row>
            <Stack className="font-inter lg:h-[107px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:ml-[105px] xl:ml-[131px] 2xl:ml-[148px] 3xl:ml-[177px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[78%]">
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
                    <Row className="item-center lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[48%]">
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
            <Footer1 className="bg-indigo_900 font-ptsans 2xl:mt-[104px] 3xl:mt-[124px] lg:mt-[73px] xl:mt-[92px] w-[100%]" />
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default GrouphomepagePage;
