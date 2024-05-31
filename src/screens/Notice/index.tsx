import NavigationBar from "@/components/NavigationBar";
import { useStore } from "@/mobx/store";
import { Scroll, Wrapper } from "@/utils/global";
import React, { useEffect, useState } from "react";
import { Image, Text } from "react-native";
import { Card, CardSubTitle, CardTitle, Container } from "./styles";

const Notice: React.FC = () => {
  const { noticeStore } = useStore();
  const [isNotice, setIsNotice] = useState([]);

  const fetchData = async () => {
    try {
      const response = await noticeStore.getNotices();
      setIsNotice(
        response
          .map((notice) => ({
            ...notice,
            images: JSON.parse(notice.imagens.replace(/\\/g, "/")),
          }))
          .slice(0, 5)
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [noticeStore]);

  return (
    <>
      <NavigationBar title="Notícias" />
      <Wrapper>
        <Scroll>
          <Container>
            {isNotice.map((place, index) => (
              <Card key={index}>
                <CardTitle>{place?.titulo}</CardTitle>
                <CardSubTitle>{place?.introducao}</CardSubTitle>
              </Card>
            ))}
          </Container>
        </Scroll>
      </Wrapper>
    </>
  );
};

export default Notice;
