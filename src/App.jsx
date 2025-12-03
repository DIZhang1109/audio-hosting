import AudioCard from "./components/AudioCard";

import audio1 from "./assets/001.m4a";
import audio2 from "./assets/002.m4a";
import audio3 from "./assets/003.m4a";
import audio4 from "./assets/004.m4a";
import audio5 from "./assets/005.m4a";
import audio6 from "./assets/006.m4a";
import audio7 from "./assets/007.m4a";
import audio8 from "./assets/008.m4a";
import audio9 from "./assets/009.m4a";
import audio10 from "./assets/010.m4a";
import audio11 from "./assets/011.m4a";
import audio12 from "./assets/012.m4a";
import audio13 from "./assets/013.m4a";
import audio14 from "./assets/014.m4a";

const audioList = [
  {
    title: "第一回",
    description:
      "《说习全传》第一回：习近平如何当上厦门副市长？在当地有多不受待见？习仲勋｜改革开放｜双峰政治｜胡耀邦｜邓小平｜陈云｜项南｜",
    src: audio1,
  },
  {
    title: "第二回",
    description:
      "《说习全传》第二回：厦门副市长习近平，真不如副县长薄熙来？谁为习近平在福建保驾护航？何立峰如何俘获圣心？贾庆林｜江泽民｜改革开放｜干部四化｜李强｜蔡奇｜第一工业机械部｜",
    src: audio2,
  },
  {
    title: "第三回",
    description:
      "《说习全传》第三回：习近平为什么对“改革开放”不感冒？｜邓小平｜习仲勋｜邓朴方｜陕北红军｜刘志丹｜高岗｜中央红军｜刘少奇｜毛泽东｜",
    src: audio3,
  },
  {
    title: "第四回",
    description:
      "《说习全传》第四回：习近平被下放宁德，真碌碌无为吗？习仲勋真的是「改革派」吗？｜六四｜胡耀邦｜邓小平｜闽江新军｜蔡奇｜薄一波｜彭丽媛｜",
    src: audio4,
  },
  {
    title: "第五回",
    description:
      "《说习全传》第五回：习近平「闽江新军」：福建帮为何能党、政、军、警大权独揽？｜蔡奇｜李强｜何卫东｜31军｜黄坤明｜王小洪｜何立峰｜袁家军｜马兴瑞｜陈敏尔｜张又侠｜李尚福｜",
    src: audio5,
  },
  {
    title: "第六回",
    description:
      "《说习全传》第六回：习近平为为何在「远华案」要保护贾庆林？他认识赖昌星吗？｜江泽民｜朱镕基｜第一机械工业部｜黄敬｜江青｜毛泽东｜",
    src: audio6,
  },
  {
    title: "第七回",
    description:
      "《说习全传》第七回：李锐怎么让习近平官运“起飞”？陈云派李锐执掌中组部“青干局”，交代什么任务？｜薄熙来｜团派｜干部四化｜胡耀邦｜邓小平｜胡锦涛｜李克强｜",
    src: audio7,
  },
  {
    title: "第八回",
    description:
      "《说习全传》第八回：习近平在浙江大展拳脚，还是“无为而治”？凭什么政绩接任陈良宇？｜宏观调控｜胡锦涛｜李源潮｜陈良宇｜宋德福｜团派｜八八战略｜五大百亿｜张德江｜浙江经验｜",
    src: audio8,
  },
  {
    title: "第九回",
    description:
      "《说习全传》第九回：“绍兴师爷”陈敏尔曾是习近平接班人？如今为何失宠？｜之江新军｜贵州模式｜城投债｜孙志刚｜李强｜蔡奇｜王沪宁｜李鸿忠｜之江新语｜",
    src: audio9,
  },
  {
    title: "第十回",
    description:
      "《说习全传》第十回：李强当官：最年轻市委书记，如何俘获习近平的心？和陈敏尔竞争中怎样胜出？｜马云｜马斯克｜上海封城｜特斯拉｜温州模式｜",
    src: audio10,
  },
  {
    title: "第十一回",
    description:
      "《说习全传》十一回：“小镇青年”李强之逆袭：“习家军”中高学历？当上总理有何过人之处？能否挽救中国？｜习近平｜蔡奇｜陈敏尔｜恢复高考｜赵洪祝｜夏宝龙｜马斯克｜特斯拉｜上海超级工厂｜",
    src: audio11,
  },
  {
    title: "第十二回",
    description:
      "习近平逃回北京沦为「劳改犯」修下水道，谁帮他从梁家河上了「上清华」？｜十里山路不换肩｜习仲勋｜齐心｜习远平｜胡锦涛｜薄熙来｜聂卫平｜红卫兵｜文革｜《说习全传》十二回",
    src: audio12,
  },
  {
    title: "第十三回",
    description:
      "《说习全传》十三回：习近平“上清华”是凭真本事吗？精心策划“逃离梁家河“，背后的女人：齐心｜习仲勋｜陕北红军｜文革｜上山下乡｜知青插队｜",
    src: audio13,
  },
  {
    title: "第十四回",
    description:
      "《说习全传》十四回：习近平求学记：写经济学论文，怎拿清华“法学博士”？工农兵大学生算“大学生”吗？｜王岐山｜王沪宁｜李克强｜陈希｜清华｜",
    src: audio14,
  },
  {
    title: "第十五回",
    description:
      "《说习全传》十五回：陈良宇为何反对胡温“中央调控“？习近平参与“东南互保“？｜胡锦涛｜温家宝｜黄菊｜上海帮｜上海社保案｜韩正｜祝均一｜",
    // src: audio15,
  },
  {
    title: "第十六回",
    description:
      "《说习全传》十六回：习近平善后：怎样重塑上海政坛利益？为何没处理韩正？｜上海帮｜陈良宇｜温家宝｜胡锦涛｜刘延东｜应勇｜",
    // src: audio16,
  },
  {
    title: "第十七回",
    description:
      "《说习全传》十七回：十七大：习近平为何被立为“王储”？超车李克强，谁是幕后推手？｜曾庆红｜太子党｜上海帮｜团派｜",
    // src: audio17,
  },
  {
    title: "第十八回",
    description:
      "《说习全传》十八回：薄熙来不配当习的对手？习近平为何反对习仲勋？谁是中国戈尔巴乔夫？｜十八大｜李克强｜王立军｜红卫兵｜",
    // src: audio18,
  },
];

export default function App() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">说习全传</h1>

        {audioList.map((item, index) => (
          <AudioCard
            key={index}
            index={index}
            title={item.title}
            description={item.description}
            src={item.src}
          />
        ))}
      </div>
    </section>
  );
}
