
const naufragios = [
    {
        nome: "RMS Titanic",
        local: "Oceano Atlântico Norte — Terra Nova",
        lat: 41.732500,
        lon: -49.946944,
        anoCriacao: 1909,
        anoAfundamento: 1912,
        descricao: "O transatlântico mais famoso da história, construído pela White Star Line, colidiu com um iceberg em sua viagem inaugural."
    },
    {
        nome: "HMHS Britannic",
        local: "Mar Egeu — Grécia",
        lat: 37.701389,
        lon: 24.283889,
        anoCriacao: 1914,
        anoAfundamento: 1916,
        descricao: "Navio irmão do Titanic, convertido em navio-hospital durante a Primeira Guerra Mundial, afundado por uma mina submarina."
    },
    {
        nome: "RMS Lusitania",
        local: "Mar da Irlanda",
        lat: 51.416667,
        lon: -8.550000,
        anoCriacao: 1906,
        anoAfundamento: 1915,
        descricao: "Transatlântico britânico torpedeado por um submarino alemão U-20, acelerando a entrada dos EUA na Primeira Guerra."
    },
    {
        nome: "USS Arizona (BB-39)",
        local: "Pearl Harbor — Oceano Pacífico",
        lat: 21.364722,
        lon: -157.950000,
        anoCriacao: 1915,
        anoAfundamento: 1941,
        descricao: "Encouraçado da Marinha dos EUA destruído durante o ataque japonês a Pearl Harbor, servindo hoje como memorial."
    },
    {
        nome: "SS Andrea Doria",
        local: "Oceano Atlântico — Massachusetts",
        lat: 40.491667,
        lon: -69.850000,
        anoCriacao: 1951,
        anoAfundamento: 1956,
        descricao: "Luxuoso transatlântico italiano que afundou após colidir com o navio MS Stockholm em meio a denso nevoeiro."
    },
    {
        nome: "Vasa",
        local: "Mar Báltico — Estocolmo",
        lat: 59.327778,
        lon: 18.091111,
        anoCriacao: 1626,
        anoAfundamento: 1628,
        descricao: "Galeão de guerra da Suécia que naufragou a menos de um quilômetro de sua partida em seu voo inaugural por excesso de peso."
    },
    {
        nome: "MS Estonia",
        local: "Mar Báltico",
        lat: 59.383333,
        lon: 21.666667,
        anoCriacao: 1979,
        anoAfundamento: 1994,
        descricao: "Ferry boat que naufragou em uma noite tempestuosa no Mar Báltico, resultando em uma das maiores tragédias civis europeias."
    },
    {
        nome: "SS Edmund Fitzgerald",
        local: "Lago Superior — EUA/Canadá",
        lat: 46.998333,
        lon: -85.110000,
        anoCriacao: 1958,
        anoAfundamento: 1975,
        descricao: "O maior cargueiro a afundar nos Grandes Lagos da América do Norte, eternizado na música de Gordon Lightfoot."
    },
    {
        nome: "Mary Rose",
        local: "Solent — Reino Unido",
        lat: 50.793889,
        lon: -1.105000,
        anoCriacao: 1510,
        anoAfundamento: 1545,
        descricao: "Nau capitânia da frota do Rei Henrique VIII da Inglaterra, recuperada do fundo do mar em excelente estado de preservação."
    },
    {
        nome: "SS Thistlegorm",
        local: "Mar Vermelho — Egito",
        lat: 27.814167,
        lon: 33.920000,
        anoCriacao: 1940,
        anoAfundamento: 1941,
        descricao: "Navio cargueiro militar britânico bombardeado pela aviação alemã, carregando trens, caminhões e suprimentos."
    },
    {
        nome: "Bismarck",
        local: "Oceano Atlântico Norte",
        lat: 48.166667,
        lon: -16.200000,
        anoCriacao: 1939,
        anoAfundamento: 1941,
        descricao: "O mais poderoso couraçado da marinha nazista alemã, afundado pela frota britânica após intensa perseguição."
    },
    {
        nome: "San José",
        local: "Mar do Caribe — Colômbia",
        lat: 10.166667,
        lon: -75.750000,
        anoCriacao: 1698,
        anoAfundamento: 1708,
        descricao: "Galeão espanhol afundado por esquadrão britânico, famoso por carregar um tesouro inestimável em ouro e esmeraldas."
    },
    {
        nome: "RMS Republic",
        local: "Oceano Atlântico — Massachusetts",
        lat: 40.433333,
        lon: -69.666667,
        anoCriacao: 1903,
        anoAfundamento: 1909,
        descricao: "Transatlântico da White Star Line que afundou após colisão, pioneiro no uso do sinal de socorro CQD."
    },
    {
        nome: "SS Yongala",
        local: "Grande Barreira de Corais — Austrália",
        lat: -19.304444,
        lon: 147.621944,
        anoCriacao: 1903,
        anoAfundamento: 1911,
        descricao: "Navio de passageiros e carga tragado por um ciclone tropical na costa australiana."
    },
    {
        nome: "USS Indianapolis (CA-35)",
        local: "Oceano Pacífico — Mar das Filipinas",
        lat: 12.033333,
        lon: 134.800000,
        anoCriacao: 1931,
        anoAfundamento: 1945,
        descricao: "Cruzador torpedeado por um submarino japonês logo após entregar componentes da bomba atômica."
    },
    {
        nome: "MS Costa Concordia",
        local: "Mar Tirreno — Itália",
        lat: 42.365278,
        lon: 10.921389,
        anoCriacao: 2004,
        anoAfundamento: 2012,
        descricao: "Gigantesco navio de cruzeiro que naufragou após colidir contra rochas na costa da ilha de Giglio."
    },
    {
        nome: "Wilhelm Gustloff",
        local: "Mar Báltico — Polônia",
        lat: 55.116667,
        lon: 17.416667,
        anoCriacao: 1937,
        anoAfundamento: 1945,
        descricao: "Navio de passageiros alemão torpedeado por um submarino soviético, causando a maior perda de vidas em um único naufrágio da história."
    },
    {
        nome: "MV Doña Paz",
        local: "Estreito de Tablas — Filipinas",
        lat: 12.883333,
        lon: 121.666667,
        anoCriacao: 1963,
        anoAfundamento: 1987,
        descricao: "Balsa de passageiros que colidiu com um petroleiro, resultando no pior desastre marítimo em tempos de paz."
    },
    {
        nome: "SS General Slocum",
        local: "East River — Nova York",
        lat: 40.780556,
        lon: -73.891111,
        anoCriacao: 1891,
        anoAfundamento: 1904,
        descricao: "Vapor de rodas que pegou fogo no rio East River em Nova York, matando mais de mil pessoas."
    },
    {
        nome: "RMS Carpathia",
        local: "Oceano Atlântico — Irlanda",
        lat: 49.466667,
        lon: -10.683333,
        anoCriacao: 1902,
        anoAfundamento: 1918,
        descricao: "O navio que resgatou os sobreviventes do Titanic, posteriormente torpedeado na Primeira Guerra Mundial."
    },
    {
        nome: "Yamato",
        local: "Oceano Pacífico — Japão",
        lat: 30.366667,
        lon: 128.066667,
        anoCriacao: 1937,
        anoAfundamento: 1945,
        descricao: "O maior e mais pesadamente armado couraçado já construído, afundado por ataques aéreos americanos."
    },
    {
        nome: "USS Hornet (CV-8)",
        local: "Oceano Pacífico — Ilhas Salomão",
        lat: -8.639722,
        lon: 166.709444,
        anoCriacao: 1940,
        anoAfundamento: 1942,
        descricao: "Porta-aviões famoso por lançar o Ataque Doolittle sobre Tóquio, afundado na Batalha das Ilhas Santa Cruz."
    },
    {
        nome: "USS Lexington (CV-2)",
        local: "Mar de Coral",
        lat: -15.200000,
        lon: 155.400000,
        anoCriacao: 1925,
        anoAfundamento: 1942,
        descricao: "Primeiro grande porta-aviões da Marinha dos EUA, perdido na histórica Batalha do Mar de Coral."
    },
    {
        nome: "USS Wasp (CV-7)",
        local: "Oceano Pacífico — Mar de Coral",
        lat: -12.416667,
        lon: 164.133333,
        anoCriacao: 1939,
        anoAfundamento: 1942,
        descricao: "Porta-aviões americano atingido por torpedos de um submarino japonês durante campanhas em Guadalcanal."
    },
    {
        nome: "HMS Hood",
        local: "Estreito da Dinamarca",
        lat: 63.333333,
        lon: -31.833333,
        anoCriacao: 1918,
        anoAfundamento: 1941,
        descricao: "O orgulho da Marinha Real Britânica, destruído em segundos pelo couraçado alemão Bismarck."
    },
    {
        nome: "HMS Prince of Wales",
        local: "Mar da China Meridional",
        lat: 3.560000,
        lon: 104.478333,
        anoCriacao: 1939,
        anoAfundamento: 1941,
        descricao: "Encouraçado britânico afundado por bombardeiros japoneses junto com o HMS Repulse."
    },
    {
        nome: "HMS Repulse",
        local: "Mar da China Meridional",
        lat: 3.613333,
        lon: 104.341667,
        anoCriacao: 1913,
        anoAfundamento: 1941,
        descricao: "Cruzador de batalha britânico afundado por ataques aéreos japoneses no início da Guerra no Pacífico."
    },
    {
        nome: "MS Express Samina",
        local: "Mar Egeu — Grécia",
        lat: 37.066667,
        lon: 25.066667,
        anoCriacao: 1966,
        anoAfundamento: 2000,
        descricao: "Ferry grego que colidiu com rochas perto da ilha de Paros devido a falha humana e negligência da tripulação."
    },

    {
        nome: "Whydah Gally",
        local: "Cabo Cod — Massachusetts",
        lat: 41.860000,
        lon: -69.960000,
        anoCriacao: 1715,
        anoAfundamento: 1717,
        descricao: "Navio negreiro capturado pelo pirata Sam Bellamy, transformado em navio corsário pirata antes de naufragar em uma tempestade."
    },
    {
        nome: "HMS Endeavour",
        local: "Baía de Newport — Rhode Island",
        lat: 41.350000,
        lon: -71.320000,
        anoCriacao: 1764,
        anoAfundamento: 1778,
        descricao: "Famoso navio comandado pelo capitão James Cook em sua primeira viagem de exploração, afundado intencionalmente pelos britânicos."
    },
    {
        nome: "SS Gairsoppa",
        local: "Oceano Atlântico Norte",
        lat: 50.000000,
        lon: -14.000000,
        anoCriacao: 1919,
        anoAfundamento: 1941,
        descricao: "Cargueiro britânico afundado por um U-boat alemão, famoso por carregar uma das maiores cargas de prata recuperada do fundo do mar."
    },
    {
        nome: "SS Central America",
        local: "Oceano Atlântico — Carolina do Norte",
        lat: 31.500000,
        lon: -77.000000,
        anoCriacao: 1852,
        anoAfundamento: 1857,
        descricao: "Vapor a palheta afundado por um furacão, carregando toneladas de ouro da Corrida do Ouro da Califórnia."
    },
    {
        nome: "City of Cairo",
        local: "Oceano Atlântico Sul",
        lat: -21.700000,
        lon: -5.600000,
        anoCriacao: 1915,
        anoAfundamento: 1942,
        descricao: "Navio de passageiros e carga britânico torpedeado por submarino alemão transportando moedas de prata."
    },
    {
        nome: "MS Herald of Free Enterprise",
        local: "Zeebrugge — Bélgica",
        lat: 50.950000,
        lon: 1.850000,
        anoCriacao: 1980,
        anoAfundamento: 1987,
        descricao: "Balsa ro-ro que emborcou rapidamente após zarpar com as portas da proa abertas, resultando em grande comoção na Europa."
    },
    {
        nome: "SS Sultana",
        local: "Rio Mississippi — EUA",
        lat: 35.210000,
        lon: -90.150000,
        anoCriacao: 1863,
        anoAfundamento: 1865,
        descricao: "Vapor do rio Mississippi cuja caldeira explodiu, causando o pior desastre marítimo da história dos Estados Unidos."
    },
    {
        nome: "General von Steuben",
        local: "Mar Báltico",
        lat: 54.580000,
        lon: 16.800000,
        anoCriacao: 1923,
        anoAfundamento: 1945,
        descricao: "Transatlântico alemão convertido em navio de evacuação, afundado por torpedos soviéticos no final da guerra."
    },
    {
        nome: "SS Persia",
        local: "Mar Mediterrâneo — Creta",
        lat: 34.000000,
        lon: 25.000000,
        anoCriacao: 1900,
        anoAfundamento: 1915,
        descricao: "Transatlântico britânico afundado por um submarino austro-húngaro sem aviso prévio."
    },
    {
        nome: "SS Arabic",
        local: "Oceano Atlântico — Irlanda",
        lat: 50.500000,
        lon: -10.600000,
        anoCriacao: 1902,
        anoAfundamento: 1915,
        descricao: "Linhórtil da White Star Line torpedeado por submarino alemão no litoral irlandês."
    },
    {
        nome: "SS Laurentic",
        local: "Costa Norte da Irlanda",
        lat: 55.600000,
        lon: -7.500000,
        anoCriacao: 1908,
        anoAfundamento: 1917,
        descricao: "Navio armado britânico que bateu em minas navais carregando lingotes de ouro oficiais do governo."
    },
    {
        nome: "SS Transylvania",
        local: "Mar Mediterrâneo — Itália",
        lat: 34.300000,
        lon: 12.300000,
        anoCriacao: 1914,
        anoAfundamento: 1917,
        descricao: "Navio de tropas britânico torpedeado enquanto transportava soldados aliados para o front."
    },
    {
        nome: "RMS Mendi",
        local: "Canal da Mancha",
        lat: 50.500000,
        lon: -1.500000,
        anoCriacao: 1905,
        anoAfundamento: 1917,
        descricao: "Vapor a vapor que afundou após colisão em nevoeiro pesado, levando centenas de membros do Corpo de Trabalho Sul-Africano."
    },
    {
        nome: "SS Athenia",
        local: "Oceano Atlântico Norte",
        lat: 56.700000,
        lon: -14.600000,
        anoCriacao: 1922,
        anoAfundamento: 1939,
        descricao: "Primeiro navio civil britânico afundado na Segunda Guerra Mundial, poucas horas após a declaração de guerra."
    },
    {
        nome: "HMS Royal Oak",
        local: "Scapa Flow — Escócia",
        lat: 58.900000,
        lon: -2.900000,
        anoCriacao: 1914,
        anoAfundamento: 1939,
        descricao: "Encouraçado da Marinha Real afundado dentro de sua base principal por um submarino alemão U-47."
    },
    {
        nome: "HMS Courageous",
        local: "Oceano Atlântico Norte",
        lat: 50.500000,
        lon: -14.500000,
        anoCriacao: 1916,
        anoAfundamento: 1939,
        descricao: "Porta-aviões britânico convertido, o primeiro navio de guerra da Royal Navy perdido na Segunda Guerra."
    },
    {
        nome: "HMS Glorious",
        local: "Mar da Noruega",
        lat: 69.000000,
        lon: 4.500000,
        anoCriacao: 1916,
        anoAfundamento: 1940,
        descricao: "Porta-aviões britânico afundado por cruzadores de batalha alemães Scharnhorst e Gneisenau."
    },
    {
        nome: "HMAS Sydney",
        local: "Costa da Austrália Ocidental",
        lat: -26.100000,
        lon: 111.300000,
        anoCriacao: 1934,
        anoAfundamento: 1941,
        descricao: "Cruzador leve australiano afundado após um combate feroz contra o corsário alemão Kormoran."
    },
    {
        nome: "USS Juneau",
        local: "Ilhas Salomão — Pacífico",
        lat: -10.500000,
        lon: 161.000000,
        anoCriacao: 1941,
        anoAfundamento: 1942,
        descricao: "Cruzador leve americano torpedeado na Batalha Naval de Guadalcanal (famoso pelos cinco irmãos Sullivan a bordo)."
    },
    {
        nome: "USS Houston",
        local: "Estreito de Sunda — Indonésia",
        lat: -6.100000,
        lon: 106.000000,
        anoCriacao: 1929,
        anoAfundamento: 1942,
        descricao: "Cruzador pesado americano afundado heroicamente em combate contra superior força naval japonesa."
    },
    {
        nome: "HMAS Perth",
        local: "Estreito de Sunda — Indonésia",
        lat: -5.900000,
        lon: 106.100000,
        anoCriacao: 1934,
        anoAfundamento: 1942,
        descricao: "Cruzador australiano afundado na mesma batalha que o USS Houston."
    },
    {
        nome: "IJN Akagi",
        local: "Atol de Midway — Pacífico",
        lat: 30.500000,
        lon: 173.800000,
        anoCriacao: 1925,
        anoAfundamento: 1942,
        descricao: "Principal porta-aviões da frota japonesa na Batalha de Midway, afundado por bombardeiros americanos."
    },
    {
        nome: "IJN Kaga",
        local: "Atol de Midway — Pacífico",
        lat: 30.400000,
        lon: 179.100000,
        anoCriacao: 1928,
        anoAfundamento: 1942,
        descricao: "Porta-aviões pesado japonês destruído durante o ponto de virada da guerra no Pacífico."
    },
    {
        nome: "IJN Soryu",
        local: "Atol de Midway — Pacífico",
        lat: 30.600000,
        lon: 179.300000,
        anoCriacao: 1935,
        anoAfundamento: 1942,
        descricao: "Porta-aviões japonês severamente danificado e afundado em Midway."
    },
    {
        nome: "IJN Hiryu",
        local: "Atol de Midway — Pacífico",
        lat: 30.800000,
        lon: 179.400000,
        anoCriacao: 1937,
        anoAfundamento: 1942,
        descricao: "Último porta-aviões japonês operativo em Midway, afundado após ataques aéreos implacáveis."
    },
    {
        nome: "SS Rio de Janeiro",
        local: "Baía de São Francisco — EUA",
        lat: 37.700000,
        lon: -122.500000,
        anoCriacao: 1914,
        anoAfundamento: 1942, // Ajustado data histórica fictícia de exemplo para registro
        descricao: "Vapor de passageiros que bateu em rochas perto do Golden Gate devido à névoa densa."
    },
    {
        nome: "SS Caribou",
        local: "Golfo de São Lourenço — Canadá",
        lat: 47.300000,
        lon: -59.300000,
        anoCriacao: 1925,
        anoAfundamento: 1942,
        descricao: "Balsa de passageiros canadense torpedeada por um submarino alemão com centenas de civis e militares a bordo."
    },
    {
        nome: "SS City of Athens",
        local: "Costa da Califórnia — EUA",
        lat: 37.700000,
        lon: -122.500000,
        anoCriacao: 1900,
        anoAfundamento: 1918,
        descricao: "Vapor americano que colidiu com um navio a vapor francês em meio a forte cerração."
    },
    {
        nome: "SS San Demetrio",
        local: "Oceano Atlântico Norte",
        lat: 52.000000,
        lon: -35.000000,
        anoCriacao: 1938,
        anoAfundamento: 1942,
        descricao: "Petroleiro britânico heroicamente revesado e salvo por sua tripulação após ser severamente danificado."
    },
    {
        nome: "SS Empire Heritage",
        local: "Costa Noroeste da Irlanda",
        lat: 55.500000,
        lon: -8.100000,
        anoCriacao: 1930,
        anoAfundamento: 1944,
        descricao: "Navio tanque britânico torpedeado carregando tanques Sherman em seu porão."
    },
    {
        nome: "SS Leopoldville",
        local: "Canal da Mancha",
        lat: 49.700000,
        lon: -1.400000,
        anoCriacao: 1929,
        anoAfundamento: 1944,
        descricao: "Navio de tropas belga torpedeado no Natal de 1944 enquanto transportava reforços para a Batalha do Bulge."
    },
    {
        nome: "SS Scharnhorst",
        local: "Cabo Norte — Noruega",
        lat: 72.200000,
        lon: 28.300000,
        anoCriacao: 1936,
        anoAfundamento: 1943,
        descricao: "Cruzador de batalha alemão afundado por artilharia pesada e torpedos da Marinha Real Britânica."
    },
    {
        nome: "IJN Musashi",
        local: "Mar de Sibuyan — Filipinas",
        lat: 13.100000,
        lon: 122.400000,
        anoCriacao: 1940,
        anoAfundamento: 1944,
        descricao: "Irmão gêmeo do Yamato, um dos maiores couraçados do mundo, afundado após dezenas de ataques aéreos."
    },
    {
        nome: "SS Politician",
        local: "Ilhas Hébridas Exteriores — Escócia",
        lat: 57.500000,
        lon: -7.000000,
        anoCriacao: 1920,
        anoAfundamento: 1941,
        descricao: "Cargueiro famoso por encalhar carregando 22 mil caixas de uísque escocês, inspirando livros e filmes."
    },
    {
        nome: "MS Zenobia",
        local: "Baía de Larnaca — Chipre",
        lat: 34.900000,
        lon: 33.600000,
        anoCriacao: 1979,
        anoAfundamento: 1980,
        descricao: "Ferry de carga sueco que afundou em sua viagem inaugural na costa de Chipre, tornando-se um dos melhores pontos de mergulho do mundo."
    },
    {
        nome: "MV Sewol",
        local: "Mar Amarelo — Coreia do Sul",
        lat: 34.200000,
        lon: 125.900000,
        anoCriacao: 1994,
        anoAfundamento: 2014,
        descricao: "Balsa sul-coreana cujo naufrágio causou comoção nacional e global devido ao trágico impacto em estudantes secundaristas."
    },
    {
        nome: "ARA General Belgrano",
        local: "Oceano Atlântico Sul — Argentina",
        lat: -55.400000,
        lon: -61.800000,
        anoCriacao: 1938,
        anoAfundamento: 1982,
        descricao: "Cruzador leve da Armada Argentina afundado por um submarino britânico durante a Guerra das Malvinas."
    },
    {
        nome: "HMS Sheffield",
        local: "Oceano Atlântico Sul — Malvinas",
        lat: -52.600000,
        lon: -57.700000,
        anoCriacao: 1936,
        anoAfundamento: 1982,
        descricao: "Destruidor moderno da Marinha Real atingido por um míssil Exocet durante o conflito das Malvinas."
    },
    {
        nome: "MV Derbyshire",
        local: "Mar das Filipinas",
        lat: 25.500000,
        lon: 130.500000,
        anoCriacao: 1976,
        anoAfundamento: 1980,
        descricao: "O maior navio britânico a afundar na história, tragado por um tufão no Pacífico."
    }
];

const marcadores = document.getElementById("marcadores");

const nome = document.getElementById("nome");
const local = document.getElementById("local");
const ano = document.getElementById("ano");
const descricao = document.getElementById("descricao");

function calcularPosicao(latitude, longitude) {
    const x = ((longitude + 180) / 360) * 100;
    const y = ((90 - latitude) / 180) * 100;
    return { x, y };
}

naufragios.forEach(function(navio) {
    const posicao = calcularPosicao(navio.lat, navio.lon);

    const ponto = document.createElement("button");
    ponto.type = "button";
    ponto.classList.add("ponto");

    ponto.style.left = posicao.x + "%";
    ponto.style.top = posicao.y + "%";

    ponto.setAttribute(
        "aria-label",
        "Mostrar informações sobre " + navio.nome
    );

    ponto.title = navio.nome;

    ponto.addEventListener("click", function() {
        nome.textContent = navio.nome;
        local.textContent = navio.local;
        
        ano.textContent = "Construção: " + navio.anoCriacao + " | Afundamento: " + navio.anoAfundamento;

        descricao.textContent = navio.descricao || (
            "Este registro apresenta a localização geográfica de " +
            navio.nome + ", uma embarcação naufragada."
        );

        document.querySelectorAll(".ponto").forEach(function(item) {
            item.classList.remove("ativo");
        });

        ponto.classList.add("ativo");
    });

    marcadores.appendChild(ponto);
});
