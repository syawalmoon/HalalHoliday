import React from "react";

import { Column, Row, Text, Img, Line, Button, Stack } from "components";
import Header3 from "components/Header/Header3";

const LanguagePage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] lg:pb-[50px] xl:pb-[63px] 2xl:pb-[71px] 3xl:pb-[85px] w-[100%]">
        <Header3 className="w-[100%]" />
        <Column className="justify-start w-[100%]">
          <Column className="items-center justify-start w-[100%]">
            <Column className="justify-start w-[100%]">
              <Row className="items-end lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] w-[69%]">
                <Row className="font-ptsans items-end justify-center mb-[1px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] w-[32%]">
                  <Text className="tab" variant="body2">
                    Name and location
                  </Text>
                  <Img
                    src="images/img_checkmark_1.svg"
                    className="checkmark11"
                    alt="checkmark"
                  />
                </Row>
                <Column className="font-ptsans items-center justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[23%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Text className="rownameandlocati1" variant="body2">
                      Property setup
                    </Text>
                    <Row className="items-center justify-evenly lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-green_200 h-[3px] w-[13%]" />
                      <Line className="bg-light_blue_800 h-[3px] w-[13%]" />
                      <Line className="bg-gray_502 h-[3px] w-[13%]" />
                      <Line className="bg-gray_502 h-[3px] w-[13%]" />
                    </Row>
                  </Column>
                </Column>
                <Text
                  className="font-ptsanscaption lg:mb-[12px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] Photos"
                  variant="body2"
                >
                  Photos
                </Text>
                <Text
                  className="font-ptsans lg:mb-[10px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] xl:ml-[123px] 2xl:ml-[139px] 3xl:ml-[166px] lg:ml-[98px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] rownameandlocati1"
                  variant="body2"
                >
                  Pricing and calendar
                </Text>
              </Row>
              <Line className="bg-gray_400 h-[1px] mt-[1px] w-[100%]" />
            </Column>
          </Column>
          <Column className="justify-start xl:ml-[112px] 2xl:ml-[127px] 3xl:ml-[152px] lg:ml-[90px] lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[40%]">
            <Text className="Box1" as="h5" variant="h5">
              What language do you or your staff speak?
            </Text>
            <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[99%]">
              <Column className="justify-start lg:mb-[167px] xl:mb-[209px] 2xl:mb-[236px] 3xl:mb-[283px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                <Column className="items-end justify-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[23%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body2"
                  >
                    Select language
                  </Text>
                  <Row className="items-center justify-between ml-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[93%]">
                    <Column className="items-center w-[23%]">
                      <Button
                        className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center w-[100%]"
                        shape="icbRoundedBorder4"
                        size="smIcn"
                        variant="icbOutlineGray501"
                      >
                        <Img
                          src="images/img_vector_24X24.svg"
                          className="flex items-center justify-center"
                          alt="Vector"
                        />
                      </Button>
                      <Button
                        className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                        shape="icbRoundedBorder4"
                        size="smIcn"
                        variant="icbOutlineGray501"
                      >
                        <Img
                          src="images/img_vector_24X24.svg"
                          className="flex items-center justify-center"
                          alt="Vector One"
                        />
                      </Button>
                      <Button
                        className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]"
                        shape="icbRoundedBorder4"
                        size="smIcn"
                        variant="icbOutlineGray501"
                      >
                        <Img
                          src="images/img_vector_24X24.svg"
                          className="flex items-center justify-center"
                          alt="Vector Two"
                        />
                      </Button>
                      <Button
                        className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]"
                        shape="icbRoundedBorder4"
                        size="smIcn"
                        variant="icbOutlineGray501"
                      >
                        <Img
                          src="images/img_vector_24X24.svg"
                          className="flex items-center justify-center"
                          alt="Vector Three"
                        />
                      </Button>
                      <Button
                        className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                        shape="icbRoundedBorder4"
                        size="smIcn"
                        variant="icbOutlineGray501"
                      >
                        <Img
                          src="images/img_vector_24X24.svg"
                          className="flex items-center justify-center"
                          alt="Vector Four"
                        />
                      </Button>
                    </Column>
                    <Column className="w-[71%]">
                      <Text className="Box1" variant="body2">
                        Arabic
                      </Text>
                      <Text className="Maincard" variant="body2">
                        Cantonese
                      </Text>
                      <Text
                        className="lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] Box1"
                        variant="body2"
                      >
                        Chinese
                      </Text>
                      <Text className="Maincard" variant="body2">
                        English
                      </Text>
                      <Text
                        className="lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] Box1"
                        variant="body2"
                      >
                        Malay
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Line className="bg-gray_200_ce h-[1px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]" />
                <Column className="items-center justify-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[36%]">
                  <Text className="Addadditional">
                    Add additional languages
                  </Text>
                </Column>
              </Column>
            </Column>
          </Column>
          <Line className="bg-gray_200_ce h-[1px] lg:ml-[103px] xl:ml-[129px] 2xl:ml-[146px] 3xl:ml-[175px] lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[37%]" />
          <Row className="items-center xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] lg:ml-[95px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[39%]">
            <Stack className="bg-white_A700 border border-light_blue_800 border-solid lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[7px] xl:px-[9px] rounded-radius2 w-[11%]">
              <Img
                src="images/img_arrowleft_14X7.svg"
                className="arrowleft1"
                alt="arrowleft"
              />
            </Stack>
            <Button
              className="font-bold 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_101 w-[87%]"
              shape="RoundedBorder2"
              size="xl"
              variant="OutlineLightblue8001_2"
            >
              Continue
            </Button>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default LanguagePage;
