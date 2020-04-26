export type situation = {
  id: string,
  header: string,
  tips: tip[],
  references: reference[]
};

export type tip = {
  imageSource: string,
  summary: string,
  description: string
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores aut cum fugiat id incidunt iure magnam maiores, neque nobis nostrum obcaecati, possimus quibusdam quis repudiandae sunt tenetur vel.'
      },
      {
        imageSource: '../../assets/tips-image/shopping-2.png',
        summary: '美味しいものをたくさん買う',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores aut cum fugiat id incidunt iure magnam maiores, neque nobis nostrum obcaecati, possimus quibusdam quis repudiandae sunt tenetur vel.'
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores aut cum fugiat id incidunt iure magnam maiores, neque nobis nostrum obcaecati, possimus quibusdam quis repudiandae sunt tenetur vel.'
      },
      {
        imageSource: '../../assets/tips-image/elderly-2.png',
        summary: '心配していることを伝える',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores aut cum fugiat id incidunt iure magnam maiores, neque nobis nostrum obcaecati, possimus quibusdam quis repudiandae sunt tenetur vel.'
      },
      {
        imageSource: '../../assets/tips-image/elderly-3.png',
        summary: '美味しい卵焼きを食べる',
        description: 'おばあちゃんの卵焼き美味しいんです。食べたい…。'
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
    id: 'situation-stress-care',
    header: 'ストレスを抱える前に',
    tips: [
      {
        imageSource: '../../assets/tips-image/stress-care-1.png',
        summary: 'Coming soon...',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores aut cum fugiat id incidunt iure magnam maiores, neque nobis nostrum obcaecati, possimus quibusdam quis repudiandae sunt tenetur vel.'
      },
      {
        imageSource: '../../assets/tips-image/stress-care-2.png',
        summary: 'Coming soon...',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores aut cum fugiat id incidunt iure magnam maiores, neque nobis nostrum obcaecati, possimus quibusdam quis repudiandae sunt tenetur vel.'
      },
      {
        imageSource: '../../assets/tips-image/stress-care-3.png',
        summary: 'Coming soon...',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores aut cum fugiat id incidunt iure magnam maiores, neque nobis nostrum obcaecati, possimus quibusdam quis repudiandae sunt tenetur vel.'
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
    id: 'situation-office',
    header: '仕事に行く',
    tips: [
      {
        imageSource: '../../assets/tips-image/office-1.png',
        summary: 'Coming soon...',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores aut cum fugiat id incidunt iure magnam maiores, neque nobis nostrum obcaecati, possimus quibusdam quis repudiandae sunt tenetur vel.'
      },
      {
        imageSource: '../../assets/tips-image/office-2.png',
        summary: 'Coming soon...',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores aut cum fugiat id incidunt iure magnam maiores, neque nobis nostrum obcaecati, possimus quibusdam quis repudiandae sunt tenetur vel.'
      },
      {
        imageSource: '../../assets/tips-image/office-3.png',
        summary: 'Coming soon...',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores aut cum fugiat id incidunt iure magnam maiores, neque nobis nostrum obcaecati, possimus quibusdam quis repudiandae sunt tenetur vel.'
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
    id: 'situation-transportation',
    header: '車・電車を使う',
    tips: [
      {
        imageSource: '../../assets/tips-image/transportation-1.png',
        summary: 'Coming soon...',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores aut cum fugiat id incidunt iure magnam maiores, neque nobis nostrum obcaecati, possimus quibusdam quis repudiandae sunt tenetur vel.'
      },
      {
        imageSource: '../../assets/tips-image/transportation-2.png',
        summary: 'Coming soon...',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores aut cum fugiat id incidunt iure magnam maiores, neque nobis nostrum obcaecati, possimus quibusdam quis repudiandae sunt tenetur vel.'
      },
      {
        imageSource: '../../assets/tips-image/transportation-3.png',
        summary: 'Coming soon...',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores aut cum fugiat id incidunt iure magnam maiores, neque nobis nostrum obcaecati, possimus quibusdam quis repudiandae sunt tenetur vel.'
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
];
