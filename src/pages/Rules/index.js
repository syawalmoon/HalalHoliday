import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Line,
  Stack,
  Switch,
  List,
  SelectBox,
  Button,
} from "components";
import Header3 from "components/Header/Header3";

const RulesPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] lg:pb-[50px] xl:pb-[63px] 2xl:pb-[71px] 3xl:pb-[85px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header3 className="w-[100%]" />
          <Column className="justify-start w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Column className="justify-start w-[100%]">
                <Row className="items-end lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] w-[69%]">
                  <Row className="items-end justify-center mb-[1px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] w-[32%]">
                    <Text className="tab" variant="body2">
                      Name and location
                    </Text>
                    <Img
                      src="images/img_checkmark_1.svg"
                      className="checkmark11"
                      alt="checkmark"
                    />
                  </Row>
                  <Column className="items-center justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[23%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Text className="rownameandlocati1" variant="body2">
                        Property setup
                      </Text>
                      <Row className="items-center justify-evenly lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                        <Line className="bg-green_200 h-[3px] w-[13%]" />
                        <Line className="bg-green_200 h-[3px] w-[13%]" />
                        <Line className="bg-green_200 h-[3px] w-[13%]" />
                        <Line className="bg-green_200 h-[3px] w-[13%]" />
                        <Line className="bg-green_200 h-[3px] w-[13%]" />
                        <Line className="bg-light_blue_800 h-[3px] w-[13%]" />
                        <Line className="bg-gray_502 h-[3px] w-[13%]" />
                      </Row>
                    </Column>
                  </Column>
                  <Text
                    className="lg:mb-[13px] xl:mb-[16px] 2xl:mb-[19px] 3xl:mb-[22px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic Photos"
                    variant="body2"
                  >
                    Photos
                  </Text>
                  <Text
                    className="lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] lg:ml-[105px] xl:ml-[131px] 2xl:ml-[148px] 3xl:ml-[177px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] rownameandlocati1"
                    variant="body2"
                  >
                    Pricing and calendar
                  </Text>
                </Row>
                <Line className="bg-gray_400 h-[1px] mt-[1px] w-[100%]" />
              </Column>
            </Column>
            <Text
              className="xl:ml-[112px] 2xl:ml-[127px] 3xl:ml-[152px] lg:ml-[90px] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] Box1"
              as="h5"
              variant="h5"
            >
              House rules
            </Text>
            <Row className="items-start xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] lg:ml-[95px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[66%]">
              <Stack className="lg:h-[409px] xl:h-[511px] 2xl:h-[575px] 3xl:h-[690px] w-[60%]">
                <Line className="absolute bg-gray_200_ce h-[1px] inset-x-[0] mx-[auto] top-[36%] w-[95%]" />
                <Column className="absolute bg-white_A700 border border-gray_300 border-solid justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                  <Row className="items-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[95%]">
                    <Text className="Smoking" variant="body2">
                      Smoking allowed
                    </Text>
                    <Switch
                      value={false}
                      className="mb-[2px] lg:ml-[236px] xl:ml-[295px] 2xl:ml-[332px] 3xl:ml-[398px] rotate-[180deg] w-[7%]"
                    />
                  </Row>
                  <Row className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[95%]">
                    <Text className="Pets" variant="body2">
                      Pets allowed
                    </Text>
                    <Switch
                      value={false}
                      className="mb-[1px] lg:ml-[260px] xl:ml-[326px] 2xl:ml-[367px] 3xl:ml-[440px] rotate-[180deg] w-[7%]"
                    />
                  </Row>
                  <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[95%]">
                    <Text className="Pets" variant="body2">
                      Children allowed
                    </Text>
                    <Switch
                      value={false}
                      className="mb-[1px] lg:ml-[237px] xl:ml-[297px] 2xl:ml-[334px] 3xl:ml-[401px] rotate-[180deg] w-[7%]"
                    />
                  </Row>
                  <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[95%]">
                    <Text className="Smoking" variant="body2">
                      Parties/events allowed
                    </Text>
                    <Switch
                      value={false}
                      className="mb-[1px] lg:ml-[206px] xl:ml-[257px] 2xl:ml-[290px] 3xl:ml-[348px] rotate-[180deg] w-[7%]"
                    />
                  </Row>
                  <List
                    className="gap-[0] xl:mb-[110px] 2xl:mb-[124px] 3xl:mb-[148px] lg:mb-[88px] min-h-[auto] lg:mt-[47px] xl:mt-[59px] 2xl:mt-[67px] 3xl:mt-[80px] w-[100%]"
                    orientation="vertical"
                  >
                    <Column className="rules_one">
                      <Column className="justify-start w-[100%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body2"
                        >
                          Check in
                        </Text>
                        <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[59%]">
                          <Text className="Pets" variant="body6">
                            From
                          </Text>
                          <Text className="Until" variant="body6">
                            Until
                          </Text>
                        </Row>
                        <Row className="items-center justify-between lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                          <SelectBox
                            className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[47%]"
                            placeholderClassName="text-black_900"
                            name="time"
                            placeholder="15:00"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown_1.svg"
                                className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                                alt="arrow_down"
                              />
                            }
                            shape="RoundedBorder2"
                          ></SelectBox>
                          <SelectBox
                            className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[47%]"
                            placeholderClassName="text-black_900"
                            name="time One"
                            placeholder="15:00"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown_1.svg"
                                className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                                alt="arrow_down"
                              />
                            }
                            shape="RoundedBorder2"
                          ></SelectBox>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="rules_one">
                      <Column className="justify-start w-[100%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body2"
                        >
                          Check out
                        </Text>
                        <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[59%]">
                          <Text className="Pets" variant="body6">
                            From
                          </Text>
                          <Text className="Until" variant="body6">
                            Until
                          </Text>
                        </Row>
                        <Row className="items-center justify-between lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                          <SelectBox
                            className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[47%]"
                            placeholderClassName="text-black_900"
                            name="time One"
                            placeholder="15:00"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown_5X9.svg"
                                className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                                alt="arrow_down"
                              />
                            }
                            shape="RoundedBorder2"
                          ></SelectBox>
                          <SelectBox
                            className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[47%]"
                            placeholderClassName="text-black_900"
                            name="time One One"
                            placeholder="15:00"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown_5X9.svg"
                                className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                                alt="arrow_down"
                              />
                            }
                            shape="RoundedBorder2"
                          ></SelectBox>
                        </Row>
                      </Column>
                    </Column>
                  </List>
                </Column>
              </Stack>
              <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[38%]">
                <Column className="justify-start lg:mb-[10px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mt-[1px] w-[97%]">
                  <Row className="items-start w-[100%]">
                    <Img
                      src="images/img_lightbulb_1.svg"
                      className="lightbulb8"
                      alt="lightbulb"
                    />
                    <Text className="rowlightbulb2" variant="body1">
                      What if my rules change?
                    </Text>
                    <Img
                      src="images/img_close_29X29.svg"
                      className="2xl:ml-[106px] 3xl:ml-[127px] lg:ml-[75px] xl:ml-[94px] mdihomegroup"
                      alt="close"
                    />
                  </Row>
                  <Text className="columnlightbulb3" variant="body4">
                    You can easily customise these house rules later and
                    additional house rules can be set on the Policies page of
                    the extranet after you complete registeration.
                  </Text>
                </Column>
              </Column>
            </Row>
            <Line className="bg-gray_200_ce h-[1px] lg:ml-[103px] xl:ml-[129px] 2xl:ml-[146px] 3xl:ml-[175px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[37%]" />
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
      </Column>
    </>
  );
};

export default RulesPage;
