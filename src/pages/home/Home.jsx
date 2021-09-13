import Chart from "../../components/chart/Chart";
import ExampleBanner from "../../components/carousel/Example";
//import Carousel1 from "../../components/carousel/Carousel";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import SubheaderDividers from "../../components/smartProducts/smartproducts";
import BorderColor from "../../components/smartProducts/cityProducts";
import Divider from "@material-ui/core/Divider";

export default function Home() {
  return (
    <div className="home">
      
    <ExampleBanner />
   
    <SubheaderDividers />
    <BorderColor />
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
