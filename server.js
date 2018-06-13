const restify = require('restify')
const porta = 8080
const servidor = restify.createServer()

servidor.get('/transactions', (req, res) => {
    res.send(
        {
            "data": [
                {
                    "id": "1",
                    "type": "transactions",
                    "attributes": {
                        "sinacor_account": "11110",
                        "asset_id": 22220,
                        "value": "1000.0",
                        "status_cd": 0,
                        "status": "pending_dtr",
                        "kind": "investment",
                        "kind_cd": 0,
                        "amount": 100,
                        "request_date": "2018-06-11 00:00:00 +0000",
                        "operation_date": "2018-06-11",
                        "created_at": "2018-06-11 18:48:36 +0000",
                        "updated_at": "2018-06-11 18:48:36 +0000"
                    },
                    "relationships": {
                        "versions": {
                            "meta": {
                                "included": false
                            }
                        }
                    }
                },
                {
                    "id": "2",
                    "type": "transactions",
                    "attributes": {
                        "sinacor_account": "11111",
                        "asset_id": 22221,
                        "value": "1000.0",
                        "status_cd": 1,
                        "status": "pending_balance",
                        "kind": "investment",
                        "kind_cd": 0,
                        "amount": 100,
                        "request_date": "2018-06-11 00:00:00 +0000",
                        "operation_date": "2018-06-11",
                        "created_at": "2018-06-11 18:48:36 +0000",
                        "updated_at": "2018-06-11 18:48:36 +0000"
                    },
                    "relationships": {
                        "versions": {
                            "meta": {
                                "included": false
                            }
                        }
                    }
                },
                {
                    "id": "3",
                    "type": "transactions",
                    "attributes": {
                        "sinacor_account": "11112",
                        "asset_id": 22222,
                        "value": "1000.0",
                        "status_cd": 2,
                        "status": "registering_at_dtr",
                        "kind": "investment",
                        "kind_cd": 0,
                        "amount": 100,
                        "request_date": "2018-06-11 00:00:00 +0000",
                        "operation_date": "2018-06-11",
                        "created_at": "2018-06-11 18:48:36 +0000",
                        "updated_at": "2018-06-11 18:48:36 +0000"
                    },
                    "relationships": {
                        "versions": {
                            "meta": {
                                "included": false
                            }
                        }
                    }
                },
                {
                    "id": "4",
                    "type": "transactions",
                    "attributes": {
                        "sinacor_account": "11113",
                        "asset_id": 22223,
                        "value": "1000.0",
                        "status_cd": 3,
                        "status": "confirming_current_account",
                        "kind": "investment",
                        "kind_cd": 0,
                        "amount": 100,
                        "request_date": "2018-06-11 00:00:00 +0000",
                        "operation_date": "2018-06-11",
                        "created_at": "2018-06-11 18:48:36 +0000",
                        "updated_at": "2018-06-11 18:48:36 +0000"
                    },
                    "relationships": {
                        "versions": {
                            "meta": {
                                "included": false
                            }
                        }
                    }
                },
                {
                    "id": "5",
                    "type": "transactions",
                    "attributes": {
                        "sinacor_account": "11114",
                        "asset_id": 22224,
                        "value": "1000.0",
                        "status_cd": 4,
                        "status": "confirming_position",
                        "kind": "investment",
                        "kind_cd": 0,
                        "amount": 100,
                        "request_date": "2018-06-11 00:00:00 +0000",
                        "operation_date": "2018-06-11",
                        "created_at": "2018-06-11 18:48:36 +0000",
                        "updated_at": "2018-06-11 18:48:36 +0000"
                    },
                    "relationships": {
                        "versions": {
                            "meta": {
                                "included": false
                            }
                        }
                    }
                },
                {
                    "id": "6",
                    "type": "transactions",
                    "attributes": {
                        "sinacor_account": "11115",
                        "asset_id": 22225,
                        "value": "1000.0",
                        "status_cd": 5,
                        "status": "executed",
                        "kind": "investment",
                        "kind_cd": 0,
                        "amount": 100,
                        "request_date": "2018-06-11 00:00:00 +0000",
                        "operation_date": "2018-06-11",
                        "created_at": "2018-06-11 18:48:36 +0000",
                        "updated_at": "2018-06-11 18:48:36 +0000"
                    },
                    "relationships": {
                        "versions": {
                            "meta": {
                                "included": false
                            }
                        }
                    }
                },
                {
                    "id": "7",
                    "type": "transactions",
                    "attributes": {
                        "sinacor_account": "11116",
                        "asset_id": 22226,
                        "value": "1000.0",
                        "status_cd": 0,
                        "status": "pending_dtr",
                        "kind": "partial_redemption",
                        "kind_cd": 1,
                        "amount": 100,
                        "request_date": "2018-06-11 00:00:00 +0000",
                        "operation_date": "2018-06-11",
                        "created_at": "2018-06-11 18:48:36 +0000",
                        "updated_at": "2018-06-11 18:48:36 +0000"
                    },
                    "relationships": {
                        "versions": {
                            "meta": {
                                "included": false
                            }
                        }
                    }
                },
                {
                    "id": "8",
                    "type": "transactions",
                    "attributes": {
                        "sinacor_account": "11117",
                        "asset_id": 22227,
                        "value": "1000.0",
                        "status_cd": 1,
                        "status": "pending_balance",
                        "kind": "partial_redemption",
                        "kind_cd": 1,
                        "amount": 100,
                        "request_date": "2018-06-11 00:00:00 +0000",
                        "operation_date": "2018-06-11",
                        "created_at": "2018-06-11 18:48:36 +0000",
                        "updated_at": "2018-06-11 18:48:36 +0000"
                    },
                    "relationships": {
                        "versions": {
                            "meta": {
                                "included": false
                            }
                        }
                    }
                },
                {
                    "id": "9",
                    "type": "transactions",
                    "attributes": {
                        "sinacor_account": "11118",
                        "asset_id": 22228,
                        "value": "1000.0",
                        "status_cd": 2,
                        "status": "registering_at_dtr",
                        "kind": "partial_redemption",
                        "kind_cd": 1,
                        "amount": 100,
                        "request_date": "2018-06-11 00:00:00 +0000",
                        "operation_date": "2018-06-11",
                        "created_at": "2018-06-11 18:48:36 +0000",
                        "updated_at": "2018-06-11 18:48:36 +0000"
                    },
                    "relationships": {
                        "versions": {
                            "meta": {
                                "included": false
                            }
                        }
                    }
                },
                {
                    "id": "10",
                    "type": "transactions",
                    "attributes": {
                        "sinacor_account": "11119",
                        "asset_id": 22229,
                        "value": "1000.0",
                        "status_cd": 3,
                        "status": "confirming_current_account",
                        "kind": "partial_redemption",
                        "kind_cd": 1,
                        "amount": 100,
                        "request_date": "2018-06-11 00:00:00 +0000",
                        "operation_date": "2018-06-11",
                        "created_at": "2018-06-11 18:48:36 +0000",
                        "updated_at": "2018-06-11 18:48:36 +0000"
                    },
                    "relationships": {
                        "versions": {
                            "meta": {
                                "included": false
                            }
                        }
                    }
                },
                {
                    "id": "11",
                    "type": "transactions",
                    "attributes": {
                        "sinacor_account": "111110",
                        "asset_id": 222210,
                        "value": "1000.0",
                        "status_cd": 4,
                        "status": "confirming_position",
                        "kind": "partial_redemption",
                        "kind_cd": 1,
                        "amount": 100,
                        "request_date": "2018-06-11 00:00:00 +0000",
                        "operation_date": "2018-06-11",
                        "created_at": "2018-06-11 18:48:36 +0000",
                        "updated_at": "2018-06-11 18:48:36 +0000"
                    },
                    "relationships": {
                        "versions": {
                            "meta": {
                                "included": false
                            }
                        }
                    }
                },
                {
                    "id": "12",
                    "type": "transactions",
                    "attributes": {
                        "sinacor_account": "111111",
                        "asset_id": 222211,
                        "value": "1000.0",
                        "status_cd": 5,
                        "status": "executed",
                        "kind": "partial_redemption",
                        "kind_cd": 1,
                        "amount": 100,
                        "request_date": "2018-06-11 00:00:00 +0000",
                        "operation_date": "2018-06-11",
                        "created_at": "2018-06-11 18:48:36 +0000",
                        "updated_at": "2018-06-11 18:48:36 +0000"
                    },
                    "relationships": {
                        "versions": {
                            "meta": {
                                "included": false
                            }
                        }
                    }
                }
            ],
            "links": {
                "first": "/transactions?page=1",
                "last": "/transactions?page=1"
            },
            "meta": {
                "current-page": 1,
                "next-page": null,
                "prev-page": null,
                "total-pages": 1,
                "total-count": 12
            },
            "jsonapi": {
                "version": "1.0"
            }
        }
    )
});

servidor.listen(porta, () => {
    console.log(`Servidor de pé em http://localhost:${porta}`)
    console.log('Pra derrubar o servidor: ctrl + c')
});