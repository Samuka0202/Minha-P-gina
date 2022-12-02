function mensagemAlerta(){
    alert("Bem vindo a página inicial, aqui você pode ver todos os agentes quanto mapas e armas.");
    }
    function vava(){
        var personagem = (document.getElementById("lista").value);
        if(personagem == "Astra"){
            document.getElementById("img").innerHTML = "<img src = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5599d0d810824279/6036ca30ce4a0d12c3ec1dfa/V_AGENTS_587x900_Astra.png'>";
            document.getElementById("personagem").innerHTML = ("Bibliografia: Astra, a Agente ganense, utiliza energias cósmicas para moldar o campo de batalha a seu bel-prazer. Com total domínio da sua forma astral e um talento estratégico nato, ela está sempre anos-luz à frente dos inimigos.");
            document.getElementById("funcao").innerHTML = ("Função: CONTROLADORA.");
            document.getElementById("hab1").innerHTML = ("Q - PULSO NOVA Posicione Estrelas na Forma Astral (X) ATIVE uma Estrela para detonar um Pulso Nova. O Pulso Nova carrega brevemente e depois estoura, causando concussão a todos os jogadores na área..");
            document.getElementById("video1").innerHTML ="<iframe src='https://drive.google.com/file/d/1vTEPbiAkxLSBaY4hW9ro0siorWGVN6KY/preview' width='569' height='320''></iframe>";
            document.getElementById("hab2").innerHTML = ("E - NEBULOSA Posicione Estrelas na Forma Astral (X) ATIVE uma Estrela para transformá-la em uma Nebulosa (fumaça). Utilize (F) em uma Estrela para dissipá-la, retornando a estrela para ser posicionada em um novo local após um período de tempo. Dissipar forma brevemente uma Nebulosa falsa na localização da Estrela antes de retornar.");
            document.getElementById("video2").innerHTML ="<iframe src='https://drive.google.com/file/d/1rGh5pT2glDUe7mVGL01y8Ma7sz7bcpsL/preview' width='596' height='320' allow='autoplay'></iframe>";
            document.getElementById("hab3").innerHTML = ("C - POÇO GRAVITACIONAL Posicione Estrelas na Forma Astral (X) ATIVE uma Estrela para formar um Poço Gravitacional. Jogadores na área são puxados em direção ao centro antes de ele explodir, deixando frágeis todos que ainda estão presos no centro.");
            document.getElementById("video3").innerHTML ="<iframe src='https://drive.google.com/file/d/1uCQX3maL5ySJxFxHHTuTyjX5B8IekcoA/preview' width='596' height='320' allow='autoplay''></iframe>";
            document.getElementById("hab4").innerHTML = ("X - FORMA ASTRAL / DIVISA CÓSMICA ATIVE (X) para entrar na Forma Astral, em que você pode posicionar Estrelas com DISPARO PRIMÁRIO. As Estrelas podem ser reativadas depois para serem transformadas em Pulso Nova, Nebulosa ou Poço Gravitacional. Quando Divisa Cósmica estiver carregada, utilize o DISPARO SECUNDÁRIO na Forma Astral para começar a mirar e, depois, o DISPARO PRIMÁRIO para escolher dois locais. Após isso, uma Divisa Cósmica infinita surge e conecta os pontos selecionados. A Divisa Cósmica bloqueia disparos e abafa muito o som.");
            document.getElementById("video4").innerHTML ="<iframe src='https://drive.google.com/file/d/1ggmDrO5i0q8NUR_2ajM3PsfzyB35I5ke/preview' width='596' height='320' allow='autoplay'></iframe>";
        }
        else if(personagem == "Breach"){
            document.getElementById("personagem").innerHTML = ("Bibliografia: Breach, o homem-biônico sueco, dispara poderosos jatos cinéticos para forçar a abertura de um caminho pelo território inimigo. O dano e a interrupção que ele causa garantem que nenhuma luta seja justa.");
            document.getElementById("img").innerHTML = "<img src = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt100d13bfa8286a3d/5eb7cdc11ea0c32e33b95fa2/V_AGENTS_587x900_Breach.png'>";
            document.getElementById("funcao").innerHTML = ("Função: Iniciador.");
            document.getElementById("hab1").innerHTML = ("Q - ESTOPIM, EQUIPE uma carga cegante. DISPARE a carga para armar um jato de ação rápida pela parede. A carga é detonada, cegando todos os jogadores que estiverem olhando para ela.");
            document.getElementById("video1").innerHTML ="<iframe src='https://drive.google.com/file/d/1LNIEKLPBMkhedyznosfyX3AbErMkIQlA/preview' width='590' height='320' allow='autoplay'></iframe>";
            document.getElementById("hab2").innerHTML = ("E - FALHA TECTÔNICA EQUIPE um impacto sísmico. SEGURE O DISPARO para aumentar a distância. SOLTE para iniciar o terremoto, estonteando todos os jogadores na zona e numa linha reta até a zona.");
            document.getElementById("video2").innerHTML ="<iframe src='https://drive.google.com/file/d/1FbK2nLwuXsMJ-XqGmBqt2xW2e4ZczfO5/preview' width='590' height='320' allow='autoplay'></iframe>";
            document.getElementById("hab3").innerHTML = ("C - PÓS-CHOQUEEQUIPE uma carga de fusão. DISPARE a carga para armar um jato de ação lenta pela parede. O jato causa muito dano a todos que estiverem na área de efeito.");
            document.getElementById("video3").innerHTML ="<iframe src='https://drive.google.com/file/d/1N77IYGGd74MTac47tRDo2EBTLdxfu_ep/preview' width='590' height='320'allow='autoplay'></iframe>";
            document.getElementById("hab4").innerHTML = ("X - ONDA TROVEJANTE EQUIPE uma carga sísmica. Dispare para lançar um terremoto em cascata por todo o terreno num grande cone. O terremoto estonteia e derruba todos que estiverem na área de efeito.");
            document.getElementById("video4").innerHTML = "<iframe src='https://drive.google.com/file/d/1QfDE_oD37OFh5OfQkxAD5dh0yx0cAJr7/preview' width='590' height='320' allow='autoplay'></iframe>";
        }
        else if(personagem == "brimstone"){
            document.getElementById("personagem").innerHTML = ("Bibliografia: Vindo diretamente dos EUA, o arsenal orbital de Brimstone garante que o esquadrão dele esteja sempre em vantagem. Sua capacidade de oferecer utilidade com precisão a distância faz dele um comandante inigualável na linha de frente.");
            document.getElementById("img").innerHTML = "<img src = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt26fcf1b5752514ee/5eb7cdbfc1dc88298d5d3799/V_AGENTS_587x900_Brimstone.png'>";
            document.getElementById("funcao").innerHTML = ("Função: controlador.");
            document.getElementById("hab1").innerHTML = ("Q - INCENDIÁRIO EQUIPE um lançador de granadas incendiárias. DISPARE para lançar uma granada que detona no chão, gerando uma zona de fogo que causa dano aos jogadores dentro dela.");
            document.getElementById("video1").innerHTML ="<iframe src='https://drive.google.com/file/d/1HgnUqcBIEGNK4ShKTgobIzQebJ-5EDaW/preview' width='590' height='320' allow='autoplay'></iframe>";
            document.getElementById("hab2").innerHTML = ("E - FUMAÇA CELESTE EQUIPE um mapa tático. DISPARE para marcar locais onde as nuvens de fumaça de Brimstone pousarão. Use o DISPARO SECUNDÁRIO para confirmar, lançando nuvens de fumaça de longa duração que bloqueiam a visão na área selecionada.");
            document.getElementById("video2").innerHTML ="<iframe src='https://drive.google.com/file/d/14dY7s1HYFAF7_EuMkOZxEnRZjAC6WCwy/preview' width='590' height='320' allow='autoplay'></iframe>";
            document.getElementById("hab3").innerHTML = ("C - SINALIZADOR ESTIMULANTE EQUIPE um sinalizador estimulante. DISPARE para jogar o sinalizador diante de Brimstone. Ao pousar, o sinalizador criará um campo que concede Tiro Rápido aos jogadores.");
            document.getElementById("video3").innerHTML ="<iframe src='https://drive.google.com/file/d/1GkAtFaL3XmUlyZOEA6AdiwsyZe5Rf3Ie/preview' width='590' height='320' allow='autoplay'></iframe>";
            document.getElementById("hab4").innerHTML = ("X - ATAQUE ORBITAL EQUIPE um mapa tático. DISPARE para lançar um ataque prolongado de laser orbital no local selecionado, causando muito dano");
            document.getElementById("video4").innerHTML ="<iframe src='https://drive.google.com/file/d/17PanzzzrML6iwf6IVUVJLrw5KWMPPUWj/preview' width='590' height='320' allow='autoplay'></iframe>";
        }
        else if(personagem == "Chamber"){
            document.getElementById("personagem").innerHTML = ("Bibliografia: em vestido e armado até os dentes, o criador de armas francês Chamber coloca os inimigos para correr com uma precisão mortal. Use e abuse do arsenal personalizado dele para segurar posições e abater inimigos de longe, criando a defesa perfeita para qualquer plano.");
            document.getElementById("img").innerHTML = "<img src = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6f1392b30784e029/618d9da0d380f814d61f001c/WebUpdate_Chamber_KeyArt.png'>";
            document.getElementById("funcao").innerHTML = ("Função: Sentinela.");
            document.getElementById("hab1").innerHTML = ("Q - CAÇADOR DE CABEÇASATIVE para equipar uma pistola pesada. Use o MODO SECUNDÁRIO com a pistola equipada para mirar.");
            document.getElementById("video1").innerHTML ="<iframe src='https://drive.google.com/file/d/1RKQjU_NaqOwm1xp2MXQ2h57oNzzjb1-1/preview' width='590' height='320' allow='autoplay'></iframe>";
            document.getElementById("hab2").innerHTML = ("E - RENDEZVOUS POSICIONA duas âncoras de teleporte. Enquanto estiver no chão e dentro do alcance de uma das âncoras, REATIVE para teleportar rapidamente até a outra âncora. Âncoras podem ser recuperadas para serem REPOSICIONADAS.");
            document.getElementById("video2").innerHTML ="<iframe src='https://drive.google.com/file/d/1EG5rlCnNKDjlDlhpqw2mWm6SqkVZc9sv/preview' width='590' height='320' allow='autoplay'></iframe>";
            document.getElementById("hab3").innerHTML = ("C - MARCA REGISTRADA POSICIONA uma armadilha que busca por inimigos. Quando um inimigo visível entrar no alcance, a armadilha inicia uma contagem regressiva e desestabiliza o terreno ao redor, criando um campo duradouro que reduz a velocidade dos jogadores.");
            document.getElementById("video3").innerHTML ="<iframe src='https://drive.google.com/file/d/1DqRv_vFSRkuvntQ_7-0UEsn_pxZCrNam/preview' width='590' height='320' allow='autoplay'></iframe>";
            document.getElementById("hab4").innerHTML = ("X - TOUR DE FORCE ATIVE para invocar um poderoso fuzil de precisão personalizado que abate um inimigo com qualquer acerto. Abater um inimigo cria um campo duradouro que reduz a velocidade dos jogadores dentro dele.");
            document.getElementById("video4").innerHTML ="<iframe src='https://drive.google.com/file/d/1aVJtKgDE64cz13jDTYqI4t28_kNoDcic/preview' width='590' height='320' allow='autoplay'></iframe>";
    }
    else if(personagem == "cypher"){
        document.getElementById("personagem").innerHTML = ("Cypher, um vendedor de informações do Marrocos, é uma verdadeira rede de vigilância de um homem só que fica de olho em cada movimento dos inimigos. Nenhum segredo está a salvo. Nenhuma manobra passa despercebida. Cypher está sempre vigiando.");
        document.getElementById("img").innerHTML = "<img src = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt158572ec37653cf3/5eb7cdc19df5cf37047009d1/V_AGENTS_587x900_Cypher.png'>";
        document.getElementById("funcao").innerHTML = ("Função: Sentinela.");
        document.getElementById("hab1").innerHTML = ("Q - JAULA CIBERNÉTICA INSTANTANEAMENTE joga a jaula cibernética diante de Cypher. Ative para criar uma zona que bloqueia a visão e reduz a velocidade de inimigos que passarem por ela.");
        document.getElementById("video1").innerHTML ="<iframe src='https://drive.google.com/file/d/1Y_sn5Pn9easPJNgR2X0bZzd2YEbHC3fa/preview' width='590' height='320' allow='autoplay'></iframe>";
        document.getElementById("hab2").innerHTML = ("E - CÂMERA DE VIGILÂNCIA EQUIPE uma câmera de vigilância. DISPARE para colocar a câmera no local-alvo. REPITA a habilidade para controlar a visão da câmera. Enquanto controla a câmera, DISPARE para lançar um dardo marcador. O dardo revelará a localização de qualquer jogador atingido.");
        document.getElementById("video2").innerHTML ="<iframe src='https://drive.google.com/file/d/1ghLI8bN-kXldDVASUgCrIOFNN7aUjhf2/preview' width='590' height='320' allow='autoplay'></iframe>";
        document.getElementById("hab3").innerHTML = ("C - FIO-ARMADILHA EQUIPE um fio-armadilha. DISPARE para instalar um fio acionador oculto e destrutível no local-alvo, criando uma linha entre o local e a parede oposta. Jogadores inimigos que passarem por um fio e não destruírem o dispositivo a tempo ficarão imobilizados, revelados e estonteados depois de um breve intervalo. A habilidade pode ser recolhida para ser REPOSICIONADA.");
        document.getElementById("video3").innerHTML ="<iframe src='https://drive.google.com/file/d/1R7QPzgK11zLAxHJE8V48Ca4FXJUsmuqM/preview' width='590' height='320' allow='autoplay'></iframe>";
        document.getElementById("hab4").innerHTML = ("X - ASSALTO NEURAL Use INSTANTANEAMENTE num jogador inimigo morto na sua mira para revelar a localização de todos os jogadores inimigos ainda vivos.");
        document.getElementById("video4").innerHTML ="<iframe src='https://drive.google.com/file/d/1RULktQ08e29c9qUboesTm6Qe5a1O4a1n/preview' width='590' height='320' allow='autoplay'></iframe>";
    }
    else if(personagem == "Fade"){
        document.getElementById("personagem").innerHTML = ("Fade, uma caçadora de recompensas turca, usa o poder dos pesadelos para capturar os segredos dos inimigos. Personificando o próprio terror, ela persegue os alvos e revela seus medos mais profundos para, depois, destruí-los na escuridão.");
        document.getElementById("img").innerHTML = "<img src = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt516d37c6c84fcda0/625db737c9aa404b76ddd594/Fade_Key_Art_587x900_for_Website.png'>";
        document.getElementById("funcao").innerHTML = ("Função: iniciadora.");
        document.getElementById("hab1").innerHTML = ("Q – CLAUSURA EQUIPE um nódulo de puro temor. DISPARE para arremessá-lo. O nódulo cairá depois de um determinado tempo. REPITA a habilidade para soltá-lo antecipadamente. Esse nódulo se rompe ao impacto, enclausurando inimigos próximos. Inimigos enclausurados sofrem surdez e deterioração.");
        document.getElementById("video1").innerHTML ="<iframe src='https://drive.google.com/file/d/1qmVCm6wIBcaWJLO9O5niJr0kEq15Osm4/preview' width='590' height='320' allow='autoplay'></iframe>";
        document.getElementById("hab2").innerHTML = ("E – ASSOMBRAR EQUIPE uma assombração. DISPARE para arremessá-la. Ela cairá depois de um determinado tempo. REPITA a habilidade para soltá-la antecipadamente. Essa assombração ataca ao contato, revelando inimigos em sua linha de visão e criando rastros sinistros até eles. Ela pode ser destruída pelos inimigos.");
        document.getElementById("video2").innerHTML ="<iframe src='https://drive.google.com/file/d/153E8hCBrwFuDtad_WwX2hCZT5pmF1xF7/preview' width='590' height='320' allow='autoplay'></iframe>";
        document.getElementById("hab3").innerHTML = ("C – ESPREITADOR EQUIPE um Espreitador. DISPARE para enviá-lo à frente. SEGURE O DISPARO para mover o Espreitador na direção da sua retícula. Ele perseguirá o primeiro rastro sinistro ou inimigo que encontrar e afetará o alvo com visão turva ao alcançá-lo.");
        document.getElementById("video3").innerHTML ="<iframe src='https://drive.google.com/file/d/1GUTYqkAgezrh46Bb5KEqKJhLx5TkLjXs/preview' width='590' height='320' allow='autoplay'></iframe>";
        document.getElementById("hab4").innerHTML = ("X – VÉU DA NOITE EQUIPE o poder dos pesadelos. DISPARE para liberar uma onda implacável de energia aterrorizante. Inimigos atingidos pela onda são marcados por rastros sinistros e sofrem surdez e deterioração.");
        document.getElementById("video4").innerHTML ="<iframe src='https://drive.google.com/file/d/12gFKggqL9PQuRrxrA6h0y8GVYhZRVBse/preview' width='590' height='320' allow='autoplay'></iframe>";
    }
    else if(personagem == "Jett"){
        document.getElementById("personagem").innerHTML = ("Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.");
        document.getElementById("img").innerHTML = "<img src = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png'>";
        document.getElementById("funcao").innerHTML = ("Função: Duelista.");
        document.getElementById("hab1").innerHTML = ("Q - CORRENTE ASCENDENTE INSTANTANEAMENTE impele Jett bem alto no ar.");
        document.getElementById("video1").innerHTML ="<iframe src='https://drive.google.com/file/d/1LsZy4Dr3V5jNyQ0WJN01QktIZhSfEj8G/preview' width='590' height='320' allow='autoplay'></iframe>";
        document.getElementById("hab2").innerHTML = ("E - BRISA DE IMPULSO INSTANTANEAMENTE impele Jett na direção atual de movimento dela. Se estiver parada, Jett será impelida para a frente.");
        document.getElementById("video2").innerHTML ="<iframe src='https://drive.google.com/file/d/1OmRBauHRZxhj3enkumfSDPEuoGQG319V/preview' width='590' height='320' allow='autoplay'></iframe>";
        document.getElementById("hab3").innerHTML = ("C - ERUPÇÃO DAS BRUMAS Lança INSTANTANEAMENTE um projétil que se expande numa breve nuvem que obscurece a visão ao bater numa superfície. SEGURE o botão da habilidade para curvar a fumaça na direção da sua mira.");
        document.getElementById("video3").innerHTML ="<iframe src='https://drive.google.com/file/d/1YuqTxRlhX5AOyQIQGX_KO9k4Ny_CJqud/preview' width='590' height='320' allow='autoplay'></iframe>";
        document.getElementById("hab4").innerHTML = ("X - TORMENTA DE AÇO EQUIPE um conjunto de facas altamente precisas que são recarregadas ao matar um oponente. DISPARE para lançar uma única faca contra o alvo. Use o DISPARO SECUNDÁRIO para jogar todas as facas restantes contra o alvo.");
        document.getElementById("video4").innerHTML ="<iframe src='https://drive.google.com/file/d/1hPIWKpLyaNbM6bDQ-kVZ_MntcRlCREAA/preview' width='590' height='320' allow='autoplay'></iframe>";
    }
    else if(personagem == "Kay/o"){
        document.getElementById("personagem").innerHTML = ("KAY/O é uma máquina de guerra construída com um único propósito: neutralizar Radiantes. Ele é capaz de suprimir habilidades inimigas, comprometendo a capacidade de contra-ataque dos adversários e dando a si próprio e a seus aliados uma vantagem essencial em combate.");
        document.getElementById("img").innerHTML = "<img src = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5aefeb26bee12c8/60ca5aa30ece0255888d7faa/KAYO_KeyArt_587x900.png'>";
        document.getElementById("funcao").innerHTML = ("Função: Iniciador.");
        document.getElementById("hab1").innerHTML = ("Q - GRANADA/CLARÃO EQUIPE uma granada de clarão. DISPARE para jogá-la. A granada de clarão explode após um curto período, cegando qualquer um que estiver na linha de visão.");
        document.getElementById("video1").innerHTML ="<iframe src='https://drive.google.com/file/d/1zANOLTs0fr0RfCXpxFKB1BdXV1glPKPS/preview' width='590' height='320' allow='autoplay'></iframe>";
        document.getElementById("hab2").innerHTML = ("E - PONTO/ZERO EQUIPE uma lâmina de supressão. DISPARE para atirá-la. A lâmina se fixa à primeira superfície que atingir e explode, suprimindo qualquer um que estiver dentro do raio da explosão..");
        document.getElementById("video2").innerHTML ="<iframe src='https://drive.google.com/file/d/1JiaSJEXp5Ype6gI2_ZLg6fyaO4pHNlQW/preview' width='590' height='320' allow='autoplay'></iframe>";
        document.getElementById("hab3").innerHTML = ("C - FRAG/MENTO EQUIPE um fragmento explosivo. DISPARE para lançá-lo. O fragmento se fixa ao chão e explode várias vezes, causando dano quase letal no centro de cada explosão");
        document.getElementById("video3").innerHTML ="<iframe src='https://drive.google.com/file/d/1ueu82Ke4U70fRarKpkl0BbVCmXfRNZDJ/preview' width='590' height='320' allow='autoplay'></iframe>";
        document.getElementById("hab4").innerHTML = ("X - ANULAR/CMD INSTANTANEAMENTE sobrecarrega com energia de Radianita polarizada que fortalece KAY/O e emite grandes pulsos energéticos a partir de onde ele estiver. Inimigos atingidos pelos pulsos são suprimidos por um curto período.");
        document.getElementById("video4").innerHTML ="<iframe src='https://drive.google.com/file/d/1wELFIKym5uN5MtsSDUqaqG-BQiph-hU1/preview' width='590' height='320' allow='autoplay'></iframe>";
    }
    else if(personagem == "Killjoy"){
        document.getElementById("personagem").innerHTML = ("Killjoy, uma alemã genial, defende o campo de batalha facilmente usando seu arsenal de invenções. Se o dano causado por seu equipamento não der cabo dos inimigos, os efeitos negativos de seus queridos robôs dão conta do recado.");
        document.getElementById("img").innerHTML = "<img src = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt53405c26141beff8/5f21fda671ec397ef9bf0894/V_AGENTS_587x900_KillJoy_.png'>";
        document.getElementById("funcao").innerHTML = ("Função: Sentinela.");
        document.getElementById("hab1").innerHTML = ("Q - ROBÔ DE ALARME EQUIPE um Robô de Alarme oculto. DISPARE para ativar um robô que persegue os inimigos que entram no alcance. Ao se aproximar do alvo, o robô explode, causando dano e aplicando vulnerável. SEGURE EQUIPAR para retirar um robô ativado.");
       document.getElementById("video1").innerHTML ="<iframe src='https://drive.google.com/file/d/13JXaAqiRsiHsN7qR5sIJBbOvHINPUyRP/preview' width='590' height='320' allow='autoplay'></iframe>";
        document.getElementById("hab2").innerHTML = ("E - TORRETA EQUIPE uma Torreta. DISPARE para ativar uma torreta que atira em inimigos em um cone de 180°. SEGURE EQUIPAR para retirar a torreta ativada.");
        document.getElementById("hab3").innerHTML = ("C - NANOENXAME EQUIPE uma granada Nano enxame. DISPARE para lançar a granada. Ao atingir uma superfície, a Nano enxame fica oculta. ATIVE a Nano enxame para acionar um enxame de nano robôs que causam dano.");
        document.getElementById("hab4").innerHTML = ("X - CONFINAMENTO EQUIPE o dispositivo de Confinamento. DISPARE para ativá-lo. Após um longo processo de ativação, o dispositivo detém todos os inimigos no raio de alcance. O dispositivo pode ser destruído pelos inimigos.");
    }
    else if(personagem == "Neon"){
        document.getElementById("personagem").innerHTML = ("Neon, nossa Agente filipina, avança em velocidades incríveis, descarregando surtos de radiância bioelétrica tão rapidamente quanto seu corpo consegue gerá-los. Ela corre à frente para pegar os inimigos de surpresa, abatendo-os mais rápido do que um raio.");
        document.getElementById("img").innerHTML = "<img src = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8093ba7b5e84ed05/61d8a63ddea73a236fc56d12/Neon_KeyArt-Web.png'>";
        document.getElementById("funcao").innerHTML = ("Função: Duelista.");
        document.getElementById("hab1").innerHTML = ("Q - RICOCHETE ELÉTRICO INSTANTANEAMENTE arremessa um raio de energia que ricocheteia uma vez. Ao atingir cada superfície, o raio eletrifica o chão abaixo dele com uma explosão.");
        document.getElementById("hab2").innerHTML = ("E - EQUIPAMENTO VOLTAICO INSTANTANEAMENTE canaliza o poder de Neon para receber velocidade aumentada. Ao atingir a carga máxima, use o MODO SECUNDÁRIO para acionar um deslize elétrico. O carregamento é redefinido a cada dois abates.");
        document.getElementById("hab3").innerHTML = ("C - VIA EXPRESSA DISPARE duas linhas de energia no chão à frente. As linhas se estendem por uma curta distância ou até atingirem uma superfície. Elas se tornam paredes de eletricidade estática que bloqueiam a visão e causam dano aos inimigos que as atravessarem.");
        document.getElementById("hab4").innerHTML = ("X - SOBRECARGA Neon libera todo o seu poder e velocidade por um curto período. DISPARE para canalizar isso em um raio elétrico mortal com alta precisão de movimento. A duração é redefinida com cada abate.");
    }
    else if(personagem == "Omen"){
        document.getElementById("personagem").innerHTML = ("Omen, uma lembrança fantasmagórica, caça nas sombras. Ele cega os inimigos, teleporta-se pelo campo e deixa a paranoia assumir o controle enquanto o adversário tenta descobrir de onde virá seu próximo ataque");
        document.getElementById("img").innerHTML = "<img src = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4e5af408cc7a87b5/5eb7cdc17bedc8627eff8deb/V_AGENTS_587x900_Omen.png'>";
        document.getElementById("funcao").innerHTML = ("Função: Controlador.");
        document.getElementById("hab1").innerHTML = ("Q - PARANOIA INSTANTANEAMENTE emite um projétil sombrio adiante, reduzindo brevemente o alcance de visão dos jogadores tocados. O projétil atravessa paredes.");
        document.getElementById("hab2").innerHTML = ("E - MANTO SOMBRIO EQUIPE um orbe sombrio e veja o indicador de alcance. DISPARE para lançar o orbe no local marcado, criando uma esfera de sombra duradoura que bloqueia a visão. SEGURE O DISPARO SECUNDÁRIO enquanto mira para afastar o marcador. SEGURE a tecla de habilidade enquanto mira para aproximar o marcador.");
        document.getElementById("hab3").innerHTML = ("C - PASSOS TENEBROSOS EQUIPE uma habilidade de passos sombrios e olhe o indicador de alcance. DISPARE para começar uma breve canalização e, então, teleporte-se para o local marcado.");
        document.getElementById("hab4").innerHTML = ("X - SALTO DAS SOMBRAS EQUIPE um mapa tático. DISPARE para começar a se teleportar ao local selecionado. Enquanto se teleporta, Omen aparecerá como um Vulto que pode ser destruído por qualquer inimigo para cancelar o teleporte.");
    }
    else if(personagem == "phoenix"){
        document.getElementById("personagem").innerHTML = ("Chegando com tudo diretamente do Reino Unido, o poder estelar de Phoenix reluz em seu estilo de luta, incendiando o campo de batalha com luz e estilo. Tendo ajuda ou não, ele entra na luta como e quando achar que deve.");
        document.getElementById("img").innerHTML = "<img src = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0200e1821b5b39f/5eb7cdc144bf8261a04d87f9/V_AGENTS_587x900_Phx.png'>";
        document.getElementById("funcao").innerHTML = ("Função: Duelista.");
        document.getElementById("hab1").innerHTML = ("Q - BOLA CURVA EQUIPE um orbe de chamas que avança em curva e detona pouco após o lançamento. DISPARE para curvá-lo para a esquerda, detonando e cegando qualquer jogador que vir o orbe. Use o DISPARO SECUNDÁRIO para curvá-lo para a direita.");
        document.getElementById("hab2").innerHTML = ("E - MÃOS QUENTES EQUIPE uma bola de fogo. DISPARE para jogar a bola de fogo, que explode após um intervalo ou ao atingir o chão, criando uma zona duradoura de fogo que causa dano aos inimigos.");
        document.getElementById("hab3").innerHTML = ("C - LABAREDA EQUIPE uma parede de fogo. DISPARE para criar uma linha de chamas que avança, gerando uma parede de fogo que bloqueia a visão e causa dano a jogadores que passarem por ela. SEGURE O DISPARO para curvá-la na direção da mira.");
        document.getElementById("hab4").innerHTML = ("X - RENASCIMENTO INSTANTANEAMENTE coloca um marcador na localização de Phoenix. Com a habilidade ativa, morrer ou deixar o tempo acabar encerrarão a habilidade e trarão Phoenix de volta ao local marcado com Vida completa.");
    }
    else if(personagem == "Raze"){
        document.getElementById("personagem").innerHTML = ("Raze chega do Brasil em uma explosão de carisma e armas letais. Com seu estilo de jogo porradeiro, ela é craque em desentocar inimigos entrincheirados e limpar espaços apertados com uma bela dose de BUUUM!");
        document.getElementById("img").innerHTML = "<img src = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6fef56a8182d0a81/5ebf2c2798f79d6925dbd6b4/V_AGENTS_587x900_ALL_Raze_2.png'>";
        document.getElementById("funcao").innerHTML = ("Função: Duelista.");
        document.getElementById("hab1").innerHTML = ("Q - CARGA DE EXPLOSIVOS INSTANTANEAMENTE joga uma Carga de Explosivos que gruda em superfícies. REUSE a habilidade depois de instalar para detonar, causando dano e movendo tudo que for atingido. Raze não sofre dano ao ser atingida pelo efeito desta habilidade, mas ainda pode sofrer dano de queda se for arremessada para longe.");
        document.getElementById("hab2").innerHTML = ("E - CARTUCHOS DE TINTA EQUIPE uma granada múltipla. DISPARE para jogar a granada, que causa dano e cria submunições, cada uma causando dano a qualquer um que estiver no alcance.");
        document.getElementById("hab3").innerHTML = ("C - BUMBA EQUIPE um Bumba. DISPARE para lançar o robô, que avança em linha reta no chão, ricocheteando nas paredes. O Bumba trava ao detectar inimigos no cone frontal e os persegue, explodindo e causando muito dano se alcançá-los.");
        document.getElementById("hab4").innerHTML = ("X - ESTRAGA-PRAZERES EQUIPE um lança-mísseis. DISPARE um foguete que causa dano devastador em área ao fazer contato com qualquer coisa.");
    }
    else if(personagem == "Reyna"){
        document.getElementById("personagem").innerHTML = ("Criada no coração do México, Reyna domina o combate individual, destacando-se a cada abate efetuado. Sua capacidade só é limitada por sua própria perícia, tornando-a bastante dependente de desempenho.");
        document.getElementById("img").innerHTML = "<img src = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6577b1f58530e6b2/5eb7cdc121a5027d77420208/V_AGENTS_587x900_Reyna.png'>";
        document.getElementById("funcao").innerHTML = ("Função: Duelista.");
        document.getElementById("hab1").innerHTML = ("Q - DEVORAR, Inimigos abatidos por Reyna deixam Orbes de Alma que duram 3s. INSTANTANEAMENTE consome um Orbe de Alma próximo, curando-se de forma rápida por um curto período. A quantidade de Vida concedida por esta habilidade que ultrapassar 100 decairá ao longo do tempo. Se a habilidade IMPERATRIZ estiver ativa, esta habilidade será conjurada automaticamente e não consumirá o orbe.");
        document.getElementById("hab2").innerHTML = ("E- DISPENSAR, INSTANTANEAMENTE consome um Orbe de Alma próximo, ficando inatingível por um curto período. Também se torna invisível se a habilidade IMPERATRIZ estiver ativa");
        document.getElementById("hab3").innerHTML = ("C - OLHAR VEROZ, EQUIPE um olho etéreo e destrutível. ATIVE para lançá-lo adiante a uma curta distância. O olho deixará com visão turva todos os inimigos que olharem para ele.");
        document.getElementById("hab4").innerHTML = ("X - IMPERATRIZ, INSTANTANEAMENTE entra em estado de frenesi, aumentando de forma drástica as velocidades de disparo, equipamento e recarga de munição. Renova a duração ao fazer um abate.");
    }
    else if(personagem == "Sage"){
        document.getElementById("personagem").innerHTML = ("Como uma verdadeira fortaleza chinesa, Sage traz segurança para si mesma e para a equipe aonde quer que vá. Capaz de reviver aliados e rechaçar investidas agressivas, ela oferece um centro de calmaria em meio ao caos da batalha.");
        document.getElementById("img").innerHTML = "<img src = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8a627ec10b57f4f2/5eb7cdc16509f3370a5a93b7/V_AGENTS_587x900_sage.png'>";
        document.getElementById("funcao").innerHTML = ("Função: Sentinela.");
        document.getElementById("hab1").innerHTML = ("Q - Orb de lentidão, Equipe e lance um orbe de lentidão. Ao pousar, o orbe cria uma área no chão e reduz a movimentação dos inimigos no perímetro afetado.");
        document.getElementById("hab2").innerHTML = ("E- Orbe curativo, Equipe e lance um orbe curativo. Mire no aliado ferido e dispare a habilidade para curá-lo. Com o disparo secundário, a agente consegue curar a si mesma.");
        document.getElementById("hab3").innerHTML = ("C - Orbe de barreira, Equipe e lance um orbe de barreira. Mire no local desejado e dispare para erguer uma barreira. Caso deseje, utilize o botão direito do mouse para girar a parede.");
        document.getElementById("hab4").innerHTML = ("X - Ressureição, Equipe e lance uma habilidade de ressurreição. Posicione a mira sobre um aliado morto e dispare pare iniciar o processo. Após uma canalização, o aliado reviverá.");
    }
    else if(personagem == "Skye"){
        document.getElementById("personagem").innerHTML = ("Mandando um salve direto da Austrália, Skye e sua equipe de feras desbravam territórios hostis. Com seus poderes de cura e suas criações que partem pra cima dos inimigos, qualquer equipe ficará mais forte e mais segura tendo Skye como aliada..");
        document.getElementById("img").innerHTML = "<img src = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt302fcb2b9628c376/5f7fa6ff8db9ea0f149ece0a/V_AGENTS_587x900_ALL_Skye.png'>";
        document.getElementById("funcao").innerHTML = ("Função: Iniciadora.");
        document.getElementById("hab1").innerHTML = ("Q - PREDADOR EXPLOSIVO EQUIPE um amuleto de lobo-da-tasmânia. DISPARE para enviar e controlar esse predador. Enquanto estiver no controle, DISPARE para saltar para a frente. O lobo gera uma explosão e causa dano aos inimigos diretamente atingidos.");
        document.getElementById("hab2").innerHTML = ("E - LUZ DESBRAVADORA EQUIPE um amuleto de falcão. DISPARE para enviá-lo. SEGURE O DISPARO para guiar o falcão na direção da sua mira. REPITA a habilidade enquanto ele estiver voando para transformá-lo em um feixe de luz que gera uma confirmação de hit caso um inimigo esteja dentro do alcance ou na linha de visão.");
        document.getElementById("hab3").innerHTML = ("C - REFLORESCER EQUIPE um amuleto de cura. SEGURE O DISPARO para canalizar, curando aliados dentro do alcance e na sua linha de visão. Esta habilidade pode ser repetida até a reserva de cura ser esgotada. Skye não pode curar a si mesma.");
        document.getElementById("hab4").innerHTML = ("X - RASTREADORES EQUIPE um amuleto de rastreador. DISPARE para enviar três rastreadores que localizarão os três inimigos mais próximos. Se um rastreador alcançar um alvo, ele causará visão turva a esse inimigo");
    }
    else if(personagem == "Sova"){
        document.getElementById("personagem").innerHTML = ("Nascido sob o eterno inverno das tundras russas, Sova rastreia, encontra e elimina inimigos com eficiência e precisão implacáveis. Seu arco personalizado e suas habilidades inigualáveis de reconhecimento garantem que nenhuma presa escape.");
        document.getElementById("img").innerHTML = "<img src = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf11234f4775729b7/5ebf2c275e73766852c8d5d4/V_AGENTS_587x900_ALL_Sova_2.png'>";
        document.getElementById("funcao").innerHTML = ("Função: Iniciador.");
        document.getElementById("hab1").innerHTML = ("Q - FLECHA DE CHOQUE EQUIPE um arco com uma flecha de choque. DISPARE para lançar a flecha que explode ao impacto, causando dano aos jogadores próximos. SEGURE O DISPARO para estender o alcance do projétil. Use o DISPARO SECUNDÁRIO para adicionar até dois ricochetes à flecha.");
        document.getElementById("hab2").innerHTML = ("E - FLECHA RASTREADORA EQUIPE um arco com uma flecha de reconhecimento. DISPARE para lançar a flecha, que é ativada mediante impacto e revela a localização de quaisquer inimigos próximos da sua linha de visão. SEGURE O DISPARO para ampliar o alcance do projétil. Use o DISPARO SECUNDÁRIO para adicionar até dois ricochetes à flecha.");
        document.getElementById("hab3").innerHTML = ("C - DRONE CORUJA EQUIPE um drone coruja. DISPARE para acionar e pilotar o drone. Enquanto pilota o drone, DISPARE para atirar um dardo marcador. Dardos revelam a localização de quaisquer jogadores atingidos.");
        document.getElementById("hab4").innerHTML = ("X - FÚRIA DO CAÇADOR EQUIPE um arco com três disparos de longo alcance que perfuram paredes. DISPARE para atirar um raio de energia diante de Sova, causando dano e revelando a localização dos inimigos que estiverem na linha. A habilidade pode ser REPETIDA mais duas vezes enquanto o cronômetro de habilidade estiver ativo.");
    }
    else if(personagem == "Viper"){
        document.getElementById("personagem").innerHTML = ("Viper, a química dos Estados Unidos, emprega uma variedade de dispositivos químicos venenosos para controlar o campo de batalha e prejudicar a visão do inimigo. Se as toxinas não matarem a presa, seus jogos mentais certamente o farão.");
        document.getElementById("img").innerHTML = "<img src = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc825c6589eda7717/5eb7cdc6ee88132a6f6cfc25/V_AGENTS_587x900_Viper.png'>";
        document.getElementById("funcao").innerHTML = ("Função: Contoladora.");
        document.getElementById("hab1").innerHTML = ("Q - NUVEM VENENOSA EQUIPE um emissor de gás. DISPARE para jogar o emissor, que persiste até o fim da rodada. REPITA para criar uma nuvem de gás tóxico que drena combustível. A habilidade pode ser REPETIDA mais de uma vez e pode ser recolhida para ser REPOSICIONADA.");
        document.getElementById("hab2").innerHTML = ("E - CORTINA TÓXICA EQUIPE um lançador de emissores de gás. DISPARE para lançar uma longa linha de emissores de gás. REPITA a habilidade para criar uma parede alta de gás tóxico que drena combustível. A habilidade pode ser REPETIDA mais de uma vez.");
        document.getElementById("hab3").innerHTML = ("C - VENENO DE COBRA EQUIPE um lançador químico. DISPARE para lançar um cilindro que se rompe ao atingir o chão, gerando uma zona química duradoura que causa dano e reduz a velocidade dos inimigos.");
        document.getElementById("hab4").innerHTML = ("X - POÇO PEÇONHENTO EQUIPE um borrifador químico. DISPARE para borrifar uma nuvem química em todas as direções ao redor de Viper, criando uma grande nuvem que reduz o alcance de visão e a Vida máxima dos jogadores dentro dela.");
    }
    else if(personagem == "Yoru"){
        document.getElementById("personagem").innerHTML = ("Yoru, nativo do Japão, abre fendas na realidade para infiltrar as linhas inimigas sem ser visto. Ele usa tanto artimanhas quanto táticas agressivas, e os alvos são abatidos sem saber de onde o ataque veio.");
        document.getElementById("img").innerHTML = "<img src = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd4080f8efb365751/5ff5660bb47cdf7fc7d6c3dc/V_AGENTS_587x900_yoru.png'>";
        document.getElementById("funcao").innerHTML = ("Função: Duelista.");
        document.getElementById("hab1").innerHTML = ("Q - PONTO CEGO EQUIPE para arrancar da realidade um fragmento dimensional instável. DISPARE para lançar o fragmento, ativando um clarão que se dissipa ao atingir uma superfície sólida.");
        document.getElementById("hab2").innerHTML = ("E - PASSAGEM DIMENSIONAL EQUIPE para preparar um fluxo dimensional. DISPARE para lançar uma extremidade. Use o MODO SEC. para posicionar a outra. ATIVE para se teleportar até a extremidade lançada.");
        document.getElementById("hab3").innerHTML = ("C - FALCATRUA EQUIPE uma granada de eco que imita passos quando ativada. DISPARE para ativá-la e propagar seu efeito. Use o MODO SEC. para posicioná-la. USE a granada inativa para propagar o som de outra.");
        document.getElementById("hab4").innerHTML = ("X - ESPIONAGEM DIMENSIONAL EQUIPE uma máscara para olhar por entre as dimensões. DISPARE para entrar na dimensão do Yoru, onde você não poderá ser afetado nem visto pelos inimigos lá fora");
    }
    else if(personagem == "Harbor"){
        document.getElementById("personagem").innerHTML = ("Vindo do litoral indiano, Harbor entra em campo com a força da tormenta, empunhando tecnologia ancestral com domínio sobre a água. Ele libera corredeiras espumantes e ondas esmagadoras para proteger seus aliados e atacar aqueles que se opõem a ele.");
        document.getElementById("img").innerHTML = "<img src = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt81e8a3e8c7beeaf3/634894a15e281916980f655b/Harbor_KeyArt-web.png'>";
        document.getElementById("funcao").innerHTML = ("Função: Controlador.");
        document.getElementById("hab1").innerHTML = ("Q - PONTO CEGO EQUIPE, para arrancar da realidade um fragmento dimensional instável. DISPARE para lançar o fragmento, ativando um clarão que se dissipa ao atingir uma superfície sólida.");
        document.getElementById("hab2").innerHTML = ("E - ENSEADA EQUIPE, uma esfera de água defensiva. DISPARE para lançar. Use o DISPARO ALTERNATIVO para lançar por baixo. Ao atingir o solo, invoque um escudo de água que bloqueia balas");
        document.getElementById("hab3").innerHTML = ("C - CASCATA EQUIPE, uma onda de água. DISPARE para enviar a onda para frente e através de paredes. REPITA para impedir a onda de seguir em frente. Jogadores atingidos sofrem REDUÇÃO DE VELOCIDADE.");
        document.getElementById("hab4").innerHTML = ("X - ACERTO DE CONTAS, EQUIPE o poder total do seu Artefato. DISPARE para invocar um gêiser no solo. Os inimigos na área são repetidamente alvejados por ataques do gêiser. Jogadores capturados dentro de uma área de ataque sofrem CONCUSSÃO.");
    }
}
