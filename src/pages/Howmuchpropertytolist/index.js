import React from "react";

import { Column, Stack, Img, Row, Text, Line, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const HowmuchpropertytolistPage = () => {
  const navigate = useNavigate();

  function handleNavigate76() {
    navigate("/confirmation");
  }

  function handleNavigate77() {
    navigate("/propertycategorypage");
  }

  return (
    <>
      <Column className="bg-gray_50 font-ptsans justify-start mx-[auto] lg:pb-[24px] xl:pb-[30px] 2xl:pb-[34px] 3xl:pb-[40px] w-[100%]">
        <Column className="items-center w-[100%]">
          <Stack className="2xl:h-[102px] 3xl:h-[122px] lg:h-[72px] xl:h-[90px] w-[100%]">
            <Img
              src="images/img_mdihomegroup.svg"
              className="absolute lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] inset-y-[0] my-[auto] right-[17%] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
              alt="mdihomegroup"
            />
            <Row className="absolute bg-indigo_900 items-center lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
              <Row className="items-start lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[92%]">
                <Text className="language" as="h1" variant="h1">
                  <span className="text-light_green_A400 font-harmattan font-bold lg:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px]">
                    Halal
                  </span>
                  <span className="text-blue_600 font-harmattan font-bold lg:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px]">
                    Holiday
                  </span>
                  <span className="text-white_A700 font-ptsans font-bold lg:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px]">
                    {" "}
                  </span>
                </Text>
                <Column className="items-center justify-start lg:ml-[369px] xl:ml-[461px] 2xl:ml-[519px] 3xl:ml-[623px] w-[22%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="font-ptsans items-center justify-end ml-[auto] w-[64%]">
                      <Text
                        className="font-bold text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Name’s Property
                      </Text>
                      <Img
                        src="images/img_arrow1.svg"
                        className="ArrowOne"
                        alt="ArrowOne"
                      />
                    </Row>
                    <Text className="columnnamesproperty" variant="body6">
                      122 Jalan Abc, Johor Bahru, Johor 8350...{" "}
                    </Text>
                  </Column>
                </Column>
                <Img
                  src="images/img_minimize.svg"
                  className="minimize"
                  alt="minimize"
                />
                <Text className="Help" variant="body1">
                  Help
                </Text>
                <Img
                  src="images/img_question.svg"
                  className="question"
                  alt="question"
                />
                <Img
                  src="images/img_user.svg"
                  className="user_One"
                  alt="user"
                />
              </Row>
            </Row>
          </Stack>
        </Column>
        <Column className="justify-start 3xl:ml-[116px] lg:ml-[68px] xl:ml-[86px] 2xl:ml-[97px] 3xl:mt-[104px] lg:mt-[61px] xl:mt-[77px] 2xl:mt-[87px] w-[39%]">
          <Text
            className="not-italic text-black_900 w-[auto]"
            as="h4"
            variant="h4"
          >
            How many apartment are you listing?{" "}
          </Text>
          <Stack className="lg:h-[277px] xl:h-[347px] 2xl:h-[390px] 3xl:h-[468px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
            <Line className="absolute bg-gray_200_ce bottom-[24%] h-[1px] w-[100%]" />
            <Column className="absolute items-center justify-start w-[100%]">
              <Column className="bg-white_A700 items-center justify-center lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] shadow-bs3 w-[100%]">
                <Input
                  className="font-medium not-italic p-[0] xl:text-[16px] ml-[20px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:text-black_900 text-black_900 w-[100%]"
                  wrapClassName="2xl:mt-[11px] 3xl:mt-[13px] flex lg:mt-[7px] w-[100%] xl:mt-[9px]"
                  name="oneapartment"
                  placeholder="One  Apartment"
                  prefix={
                    <Img
                      src="images/img_home.svg"
                      className="mr-[3px] bg-white_A700 lg:w-[23px] lg:h-[24px] lg:ml-[22px] xl:w-[29px] xl:h-[30px] xl:ml-[28px] 2xl:w-[33px] 2xl:h-[34px] 2xl:ml-[32px] 3xl:w-[39px] 3xl:h-[40px] 3xl:ml-[38px] my-[auto]"
                      alt="home"
                    />
                  }
                  shape="RoundedBorder3"
                  size="lg"
                  variant="OutlineLightblue800"
                ></Input>
                <Input
                  className="font-medium not-italic p-[0] xl:text-[16px] ml-[20px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:text-black_900 text-black_900 w-[100%]"
                  wrapClassName="2xl:mb-[15px] 2xl:mt-[34px] 3xl:mb-[18px] 3xl:mt-[40px] flex lg:mb-[10px] lg:mt-[24px] w-[100%] xl:mb-[13px] xl:mt-[30px]"
                  name="multipleapartm"
                  placeholder="Multiple Apartment"
                  prefix={
                    <Img
                      src="images/img_calculator.svg"
                      className="mr-[2px] bg-white_A700 lg:w-[30px] lg:ml-[22px] xl:w-[38px] xl:ml-[27px] 2xl:w-[43px] 2xl:ml-[31px] 3xl:w-[51px] 3xl:ml-[37px] my-[auto]"
                      alt="calculator"
                    />
                  }
                  shape="RoundedBorder3"
                  size="lg"
                  variant="OutlineBluegray101"
                ></Input>
              </Column>
              <Row className="common-pointer items-center justify-between lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[100%]">
                <Stack className="bg-white_A700 border border-light_blue_800 border-solid lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[7px] xl:px-[9px] rounded-radius2 w-[11%]">
                  <Img
                    src="images/img_arrowleft_14X7.svg"
                    className="arrowleft1"
                    alt="arrowleft"
                    onClick={handleNavigate77}
                  />
                </Stack>
                <Button
                  className="font-bold hover:bg-sky-900 lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_101 w-[87%]"
                  shape="RoundedBorder3"
                  size="xl"
                  variant="FillLightblue800"
                  onClick={handleNavigate76}
                >
                  Continue
                </Button>
              </Row>
            </Column>
          </Stack>
        </Column>
        <Column className="font-roboto items-end lg:mt-[117px] xl:mt-[146px] 2xl:mt-[165px] 3xl:mt-[198px] lg:px-[32px] xl:px-[40px] 2xl:px-[45px] 3xl:px-[54px] w-[100%]">
          <Column className="bg-blue_50 items-end justify-start p-[3px] shadow-bs w-[22%]">
            <Column className="justify-start xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mb-[9px] mt-[2px] w-[95%]">
              <Row className="items-start justify-between ml-[4px] w-[99%]">
                <Text className="rowdescription" variant="body6">
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
                className="font-semibold lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[42%]"
                size="xl"
                variant="OutlineLightblue500"
              >
                Let us know
              </Button>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default HowmuchpropertytolistPage;
