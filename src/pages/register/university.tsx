import { Tab, TabList, Tabs, Tooltip } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const UniversityRegistration = () => {
  const { code } = useParams();
  return (
    <Tabs>
      <TabList>
        <Tab>Создайте университет</Tab>
        <Tooltip label="Сначала создайте университет" placement="right">
          <Tab isDisabled>Создайте аккаунт</Tab>
        </Tooltip>
      </TabList>
    </Tabs>
  );
};

export default UniversityRegistration;
