let textoInicial='';
let G='H M M';
let partiNames=[
    {
        "name": "MODERADOR",
        "horas": 0,
        "x": 20,
        "y": 40,
        "w": 120,
        "h": 75,
        "elige": [
            {
                "x": 25,
                "y": 65,
                "w": 45,
                "h": 55,
                "a": 0,
                "id": 0
            },
            {
                "x": 75,
                "y": 65,
                "w": 45,
                "h": 55,
                "a": 0,
                "id": 1
            }
        ],
        "conti": [
            0,
            0
        ],
        "rol": 2
    },
    {
        "name": "BERNARDINA",
        "horas": 0,
        "x": 20,
        "y": 170,
        "w": 100,
        "h": 70,
        "elige": [
            {
                "x": 25,
                "y": 210,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 0
            },
            {
                "x": 71,
                "y": 210,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 1
            }
        ],
        "conti": [
            0,
            0
        ],
        "rol": "0"
    },
    {
        "name": "VICTOR",
        "horas": 0,
        "x": 122,
        "y": 170,
        "w": 100,
        "h": 70,
        "elige": [
            {
                "x": 127,
                "y": 210,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 0
            },
            {
                "x": 173,
                "y": 210,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 1
            }
        ],
        "conti": [
            0,
            0
        ],
        "rol": "0"
    },
    {
        "name": "JOSE",
        "horas": 0,
        "x": 276,
        "y": 170,
        "w": 100,
        "h": 70,
        "elige": [
            {
                "x": 281,
                "y": 210,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 0
            },
            {
                "x": 327,
                "y": 210,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 1
            }
        ],
        "conti": [
            0,
            0
        ],
        "rol": "0"
    },
    {
        "name": "SALVADORA",
        "horas": 0,
        "x": 378,
        "y": 170,
        "w": 100,
        "h": 70,
        "elige": [
            {
                "x": 383,
                "y": 210,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 0
            },
            {
                "x": 429,
                "y": 210,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 1
            }
        ],
        "conti": [
            0,
            0
        ],
        "rol": "0"
    },
    {
        "name": "REME",
        "horas": 0,
        "x": 532,
        "y": 170,
        "w": 100,
        "h": 70,
        "elige": [
            {
                "x": 537,
                "y": 210,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 0
            },
            {
                "x": 583,
                "y": 210,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 1
            }
        ],
        "conti": [
            0,
            0
        ],
        "rol": "0"
    },
    {
        "name": "JAVI",
        "horas": 0,
        "x": 634,
        "y": 170,
        "w": 100,
        "h": 70,
        "elige": [
            {
                "x": 639,
                "y": 210,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 0
            },
            {
                "x": 685,
                "y": 210,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 1
            }
        ],
        "conti": [
            0,
            0
        ],
        "rol": "0"
    },
    {
        "name": "MARTA",
        "horas": 0,
        "x": 788,
        "y": 170,
        "w": 100,
        "h": 70,
        "elige": [
            {
                "x": 793,
                "y": 210,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 0
            },
            {
                "x": 839,
                "y": 210,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 1
            }
        ],
        "conti": [
            0,
            0
        ],
        "rol": "0"
    },
    {
        "name": "PEDRO",
        "horas": 0,
        "x": 890,
        "y": 170,
        "w": 100,
        "h": 70,
        "elige": [
            {
                "x": 895,
                "y": 210,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 0
            },
            {
                "x": 941,
                "y": 210,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 1
            }
        ],
        "conti": [
            0,
            0
        ],
        "rol": "0"
    },
    {
        "name": "ESTHER",
        "horas": 0,
        "x": 20,
        "y": 268,
        "w": 100,
        "h": 70,
        "elige": [
            {
                "x": 25,
                "y": 308,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 0
            },
            {
                "x": 71,
                "y": 308,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 1
            }
        ],
        "conti": [
            0,
            0
        ],
        "rol": "0"
    },
    {
        "name": "PACO",
        "horas": 0,
        "x": 122,
        "y": 268,
        "w": 100,
        "h": 70,
        "elige": [
            {
                "x": 127,
                "y": 308,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 0
            },
            {
                "x": 173,
                "y": 308,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 1
            }
        ],
        "conti": [
            0,
            0
        ],
        "rol": "0"
    },
    {
        "name": "GLORIA",
        "horas": 0,
        "x": 276,
        "y": 268,
        "w": 100,
        "h": 70,
        "elige": [
            {
                "x": 281,
                "y": 308,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 0
            },
            {
                "x": 327,
                "y": 308,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 1
            }
        ],
        "conti": [
            0,
            0
        ],
        "rol": "0"
    },
    {
        "name": "SUSANA",
        "horas": 0,
        "x": 378,
        "y": 268,
        "w": 100,
        "h": 70,
        "elige": [
            {
                "x": 383,
                "y": 308,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 0
            },
            {
                "x": 429,
                "y": 308,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 1
            }
        ],
        "conti": [
            0,
            0
        ],
        "rol": "0"
    },
    {
        "name": "SOFÍA",
        "horas": 0,
        "x": 532,
        "y": 268,
        "w": 100,
        "h": 70,
        "elige": [
            {
                "x": 537,
                "y": 308,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 0
            },
            {
                "x": 583,
                "y": 308,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 1
            }
        ],
        "conti": [
            0,
            0
        ],
        "rol": "0"
    },
    {
        "name": "ELENA",
        "horas": 0,
        "x": 634,
        "y": 268,
        "w": 100,
        "h": 70,
        "elige": [
            {
                "x": 639,
                "y": 308,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 0
            },
            {
                "x": 685,
                "y": 308,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 1
            }
        ],
        "conti": [
            0,
            0
        ],
        "rol": "0"
    },
    {
        "name": "VICTOR.J",
        "horas": 0,
        "x": 788,
        "y": 268,
        "w": 100,
        "h": 70,
        "elige": [
            {
                "x": 793,
                "y": 308,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 0
            },
            {
                "x": 839,
                "y": 308,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 1
            }
        ],
        "conti": [
            0,
            0
        ],
        "rol": "0"
    },
    {
        "name": "VICTORIA",
        "horas": 0,
        "x": 890,
        "y": 268,
        "w": 100,
        "h": 70,
        "elige": [
            {
                "x": 895,
                "y": 308,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 0
            },
            {
                "x": 941,
                "y": 308,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 1
            }
        ],
        "conti": [
            0,
            0
        ],
        "rol": "0"
    },
    {
        "name": "IRENE",
        "horas": 0,
        "x": 20,
        "y": 366,
        "w": 100,
        "h": 70,
        "elige": [
            {
                "x": 25,
                "y": 406,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 0
            },
            {
                "x": 71,
                "y": 406,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 1
            }
        ],
        "conti": [
            0,
            0
        ],
        "rol": "0"
    },
    {
        "name": "EDUARDO",
        "horas": 0,
        "x": 122,
        "y": 366,
        "w": 100,
        "h": 70,
        "elige": [
            {
                "x": 127,
                "y": 406,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 0
            },
            {
                "x": 173,
                "y": 406,
                "w": 45,
                "h": 40,
                "a": 0,
                "id": 1
            }
        ],
        "conti": [
            0,
            0
        ],
        "rol": "0"
    }
]
