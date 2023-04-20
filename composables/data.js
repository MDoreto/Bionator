export const classes = [
    {
        name: "Cephalochordata", features: ["notocorda persistente em adultos", "câmara cardíaca única", "ausência de dentes verdadeiros"],
    }, {
        name: "Urochordata", features: ["uma túnica", "sistema de filtração de água altamente especializado", "coração tubular", "ausência de dentes verdadeiros"],
    },
    {
        name: "Craniata", features: ["crânio"],
        children: [
            {
                name: "Gnathostomata", features: ["maxilas", "vértebras"],
                children: [
                    {
                        name: "Osteichthyes", features: ["esqueleto ósseo"], children: [
                            {
                                name: "Sarcopterygii", features: ["capa de esmalte verdadeiro nos dentes", "nadadeiras carnosas ou membros no histórico evolutivo"],
                                children: [
                                    {
                                        name: "Actinistia", features: ["bexiga natatória","escamas ou placas córneas"]
                                    },
                                    {
                                        name: "Dipnoi", features: ["pulmão alveolado", "osso maxilar","escamas ou placas córneas"]
                                    },
                                    {
                                        name: "Tetrapoda", features: ["pulmão alveolado", "osso maxilar", "4 membros no histórico evolutivo"],
                                        children: [
                                            {
                                                name: "Lissamphibia", features: ["glândulas mucosas", "glândulas granulares", "papila amphibiorum", "complexo opercular-plectro", "bastonetes verdes","dentes pendicelados","músculo levator bulbi"]
                                            },
                                            {
                                                name: "Amniota", features: ["3 membranas extra-embrionárias"],
                                                children: [
                                                    {
                                                        name: "Sauropsida", features: ["2 aberturas temporais no crânio"],
                                                        children: [
                                                            {
                                                                name: "Reptilia", features: ["escamas ou placas córneas","pele relativamente impermeável"],
                                                                children: [
                                                                    {
                                                                        name: "Crocodilia", features: ["narinas na extremidade do focinho"]
                                                                    },
                                                                    {
                                                                        name: "Lepidosauria", features: ["autotomia", "fenda cloacal transversal","hemipênis","dentição acrodonte ou pleurodonte", "ecdise"]
                                                                    },
                                                                    {
                                                                        name: "Testudine", features: ["casco = carapaça + plastrão", "bico"]
                                                                    },
                                                                ]
                                                            },
                                                            {
                                                                name: "Aves", features: ["penas", "bico", "asas", "ossos pneumáticos", "pescoço em S", "reprodução exclusivamente ovípara", "ossos do crânio fundidos"]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        name: "Synapsida", features: ["1 abertura temporal no crânio"],
                                                        children: [
                                                            {
                                                                name: "Mammalia", features: ["pelos","glândulas mamárias","glândulas sebáceas","glândulas sudoríparas","bochechas"],
                                                                children: [
                                                                    {
                                                                        name: "Monotremata", features: ["reprodução exclusivamente ovípara"]
                                                                    },
                                                                    {
                                                                        name: "Theria", features: ["ânus", "mamilos", "asas"],
                                                                        children: [
                                                                            {
                                                                                name: "Eutheria", features: ["longo período de gestação", "placenta"]
                                                                            },
                                                                            {
                                                                                name: "Marsupialia", features: ["curto período de gestação", "marsúpios"]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                        ]
                                    }
                                ]
                            },
                            { name: "Actinopterygii", features: ["nadadeiras raiadas","escamas ou placas córneas"] }
                        ]
                    },
                    {
                        name: "Chondrichthyes", features: ["esqueleto cartilaginoso", "nadadeiras", "cláspers pélvicos (machos)"],
                        children: [
                            {
                                name: "Tubarão", feature: ["mar aberto como habitat", "dentes pontiagudos e cerrilhados que ficam enfileirados", "fendas branquiais laterais", "ampolas de lorenzini","escamas ou placas córneas"]
                            },
                            {
                                name: "Arraia", features: ["fundo do mar como habitat", "olhos dorsais", "fendas branquiais ventrais", "corpo achatado", "nadadeiras peitorais hiper desenvolvidas", "nadadeira caudal em forma de chicote", "nadeira com espinhos ou toxinas","escamas ou placas córneas"]
                            },
                            {
                                name: "Quimera", features: ["fundo do mar como habitat", "fendas branquiais recobertas por um opérculo"]
                            }
                        ]
                    }]
            },

            {
                name: "Minoxydea", features: ["boca circular", "hábito carniceiro", "mecanismo de defesa baseado na produção de mucosa em grande quantidade", "mecanismo de escape baseado em dar um nó em si mesmo", "ausência de dentes verdadeiros"]
            },
            {
                name: "Petromyzontoidea", features: ["ausência de dentes verdadeiros", "hábito vampírico", "boca circular", "hábitos parasitas", "vértebras"]
            },
        ]
    }
]

