let isEnglish = localStorage.getItem("lang") === "en";

function applyLang() {
    const textMap = {
        nav_home: ["首页", "Home"],
        nav_products: ["产品服务中心", "Products & Services"],
        nav_contact: ["联系我们", "Contact"],

        hero_title: ["专业电子仪器解决方案", "Professional Electronic Solutions"],
        hero_sub: ["专注工业检测 · 实验设备 · 电子元器件供应", "Industrial Testing · Lab Equipment · Components"],

        feature1: ["仪器仪表销售", "Instrument Sales"],
        feature2: ["售后服务", "After-sales Service"],
        feature3: ["进出口业务", "Import & Export"],

        features_title: ["核心业务", "Core Services"],
        contact_btn: ["立即联系", "Contact Now"],

        about_title: ["关于我们", "About Us"],
        about_text: [
            "中山市美高电子仪器有限公司成立于2016年，致力于为工业与科研提供高质量电子设备解决方案。",
            "Founded in 2016, we provide reliable electronic solutions for industry and research."
        ],

        contact_title: ["联系我们", "Contact Us"],
        name: ["王春梅", "Shelley Wang"],
        company: ["中山市美高电子仪器有限公司", "Zhongshan Meigao Electronic Instrument Co., Ltd"],
        wechat: ["微信：shellyashu", "WeChat: shellyashu"]
    };

    for (let id in textMap) {
        let el = document.getElementById(id);
        if (el) {
            el.innerText = isEnglish ? textMap[id][1] : textMap[id][0];
        }
    }
}

function toggleLang() {
    isEnglish = !isEnglish;
    localStorage.setItem("lang", isEnglish ? "en" : "zh");
    applyLang();
}

window.onload = applyLang;