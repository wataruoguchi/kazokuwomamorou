export type situation = {
  id: string,
  header: string,
  tips: tip[],
  references: reference[]
};

export type tip = {
  imageSource: string,
  summary: string,
  descriptionLines: string[]
};

export type reference = {
  title: string,
  url: string
};

export const tipsData: situation[] = [
  {
    id: 'situation-shopping',
    header: '買い物に行く',
    tips: [
      {
        imageSource: '../../assets/tips-image/shopping-1.png',
        summary: '一度の買い物でまとめて買う',
        descriptionLines: [
          'スーパーや薬局へ買い物へ行く際は、一度に一週間分を目処にまとめて買いましょう。',
          '買い物リストを作ってから出かけることで、店内で悩む時間を減らすことができます。',
          '買い過ぎを防ぐことにも繋がり、適量な買い物をすることができます。'
        ]
      },
      {
        imageSource: '../../assets/tips-image/shopping-3.png',
        summary: '他人とは2メートルの間隔を保つ',
        descriptionLines: [
          '店内は人が密集しがちな場所です。他人と最低でも1メートル、可能であれば2メートルの距離を空けましょう。'
        ]
      },
      {
        imageSource: '../../assets/tips-image/shopping-4.png',
        summary: '電子マネーやおサイフケータイを活用する',
        descriptionLines: [
          'レジでは、現金よりもクレジットカードや電子マネー、おサイフケータイなどを使用した方が感染のリスクを下げることができます。',
          '袋を開けるためのスポンジや濡れタオルにも極力触らないようにしましょう。'
        ]
      },
      {
        imageSource: '../../assets/tips-image/shopping-2.png',
        summary: '顔を触らない、マスクを付ける',
        descriptionLines: [
          '店内では、ドアや買い物カゴなど、他の人が触ったものに触れる機会が増えます。',
          '最低限気をつけることとして、外出時は顔を触らないようにしましょう。'
        ]
      }
    ],
    references: [
      {
        title: '買い物中の感染予防と栄養バランスを意識したお買い物術',
        url: 'https://news.yahoo.co.jp/byline/naritatakanobu/20200412-00172915/'
      },
      {
        title: '「他者との距離」どう取る？　２メートル前後を義務化、罰金も―各国・新型コロナ',
        url: 'https://www.jiji.com/jc/article?k=2020041000680&g=int'
      },
      {
        title: 'Coronavirus disease (COVID-19) advice for the public',
        url: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public'
      }
    ]
  },
  {
    id: 'situation-elderly',
    header: '高齢の家族に会う',
    tips: [
      {
        imageSource: '../../assets/tips-image/elderly-1.png',
        summary: 'こまめに連絡を取り合う',
        descriptionLines: [
          '同居でない場合「家族だから」といって安心して会うことはできません。',
          'お互いの安全のために、電話で連絡をするなどし、直接会うことは控えましょう。'
        ]
      },
      {
        imageSource: '../../assets/tips-image/elderly-2.png',
        summary: '困った時は助けを呼ぶよう伝える',
        descriptionLines: [
          '妊婦の方や高齢の方は免疫力が低いです。まずは会わないことが一番ですが、やむを得ない場合もあるかもしれません。',
          '無理な外出による感染のリスクを抑えるため、買い物や移動などで困ったときには助けを呼ぶよう伝えましょう。'
        ]
      },
      {
        imageSource: '../../assets/tips-image/elderly-3.png',
        summary: '外で何かに触れたら、まず手洗いを',
        descriptionLines: [
          '手で触れたものが感染源となる場合もあります。',
          'ウイルスを殺すためにも、手をこまめに洗うことを伝えましょう。'
        ]
      },
      {
        imageSource: '../../assets/tips-image/elderly-4.png',
        summary: '他人とは2メートルの間隔を保つ',
        descriptionLines: [
          'くしゃみや咳により感染する場合もあります。いつ誰が咳をするか分かりません。',
          '人混みを避け、他の人とは最低でも1メートル、可能であれば2メートル以上の距離を空けるよう伝えましょう。'
        ]
      }
    ],
    references: [
      {
        title: '新型コロナウイルス感染症への対応について（高齢者の皆さまへ）',
        url: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/kaigo_koureisha/yobou/index_00013.html'
      },
      {
        title: 'Coronavirus disease (COVID-19) advice for the public',
        url: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public'
      }
    ]
  },
  {
    id: 'situation-stress-care',
    header: 'ストレスを抱える前に',
    tips: [
      {
        imageSource: '../../assets/tips-image/stress-care-1.png',
        summary: '情報から目を離す',
        descriptionLines: [
          'テレビ番組では毎日のように新型コロナウイルスについて報道されています。',
          'しかし、半日程度で状況が一変することは滅多にありません。',
          '心の健康を守るためにも、新型コロナウイルスの情報をチェックする回数を一日二度程度に控えましょう。'
        ]
      },
      {
        imageSource: '../../assets/tips-image/stress-care-2.png',
        summary: '連絡を取り合うこと、心のつながり',
        descriptionLines: [
          '家族に会えないからこそ、いつもより連絡を取り合い、助け合うことが心の健康につながります。',
          '自分が孤独にならないため、家族を孤独にさせないためにも、電話で連絡を取り合いましょう。'
        ]
      },
      {
        imageSource: '../../assets/tips-image/stress-care-3.png',
        summary: '適度な運動で気分転換をする',
        descriptionLines: ['早朝は人混みを避けることができる時間帯です。一人、または同居している家族と一緒にウォーキングをするなど、身体を動かしましょう。']
      }
    ],
    references: [
      {
        title: '新型コロナウイルス感染症への対応について（高齢者の皆さまへ）',
        url: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/kaigo_koureisha/yobou/index_00013.html'
      },
      {
        title: 'Mental health and psychosocial considerations during the COVID-19 outbreak',
        url: 'https://www.who.int/docs/default-source/coronaviruse/mental-health-considerations.pdf'
      }
    ]
  },
  {
    id: 'situation-office',
    header: '仕事に行く',
    tips: [
      {
        imageSource: '../../assets/tips-image/office-1.png',
        summary: '【仕事に行く前】体調チェック',
        descriptionLines: [
          '毎朝、自分の体調チェックをして、何か症状があれば会社に連絡をしましょう。',
          '・37.5度の熱はありませんか？',
          '・咳をしていませんか？'
        ]
      },
      {
        imageSource: '../../assets/tips-image/office-2.png',
        summary: '【仕事中】気をつけること',
        descriptionLines: [
          'マスクをつけること以外にも、感染を防ぐためにできることがあります。',
          '・部屋の換気をする。目安は1日3回、1回につき20〜30分',
          '・他人との距離は2メートル以上開ける',
          '・75%アルコールを使い、身の回りの機器の消毒する（会議室や公用車などの共用スペース、パソコンや固定電話など）',
          '・トイレの後と食事の前は、特に念入りに手洗いする'
        ]
      },
      {
        imageSource: '../../assets/tips-image/office-3.png',
        summary: '【仕事後】飲み会は控える',
        descriptionLines: [
          '飲み会など大人数の集まりは控えましょう。無症状でも陽性の可能性があります。',
          '近い将来、必ずまたみんなで会える日が来ます。今は物理的距離を取りましょう。'
        ]
      }
    ],
    references: [
      {
        title: 'みんなではじめよう　新型コロナウイルス予防',
        url: 'http://www.iarmm.org/J/newsletters/Covid-19_recommendation.pdf'
      }
    ]
  },
  {
    id: 'situation-transportation',
    header: '車・電車を使う',
    tips: [
      {
        imageSource: '../../assets/tips-image/transportation-1.png',
        summary: '他人とは2メートルの間隔を保つ',
        descriptionLines: ['公共交通機関はなるべく利用しないでください。利用を必要とする場合は、飛沫感染を防ぐためにも他人と最低でも1メートル、可能であれば2メートルの距離を空けましょう。']
      },
      {
        imageSource: '../../assets/tips-image/transportation-2.png',
        summary: '車の乗り合わせを避ける',
        descriptionLines: [
          '自家用車内は密閉空間であり、密接場面でもあります。',
          '三密（密閉・密集・密接）を避けるためにも、同居している家族以外と乗り合うことは控えましょう。'
        ]
      },
      {
        imageSource: '../../assets/tips-image/transportation-3.png',
        summary: '車のカギ、ドア、ハンドルの消毒',
        descriptionLines: [
          '見落としがちですが、車のカギ、ドア、ハンドルは、携帯電話と同様によく触れるものです。こまめに消毒しましょう。'
        ]
      }
    ],
    references: [
      {
        title: '新型コロナウイルス感染症への対応について（高齢者の皆さまへ）',
        url: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/hukushi_kaigo/kaigo_koureisha/yobou/index_00013.html'
      },
      {
        title: 'みんなではじめよう　新型コロナウイルス予防',
        url: 'http://www.iarmm.org/J/newsletters/Covid-19_recommendation.pdft'
      },
      {
        title: 'Coronavirus disease (COVID-19) advice for the public',
        url: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public'
      }
    ]
  },
  {
    id: 'situation-sick',
    header: '最後に',
    tips: [
      {
        imageSource: '../../assets/tips-image/when-you-feel-sick.png',
        summary: '体調に異変を感じたら、まず連絡を',
        descriptionLines: [
          '新型コロナウイルスに対応した地域の医療機関の連絡先は事前に調べ、見えるところに控えておきましょう。熱や咳、または呼吸が難しいと感じたら、まずは電話で相談しましょう。',
          '新型コロナウイルスの感染が「いつ」「どこで発生したのか」という情報は、地域を守る大事な情報となります。'
        ]
      },
    ],
    references: [
      {
        title: 'Coronavirus disease (COVID-19) advice for the public',
        url: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public'
      },
    ]
  },
];
