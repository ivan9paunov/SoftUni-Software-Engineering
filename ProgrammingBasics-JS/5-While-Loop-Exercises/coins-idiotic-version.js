function modul(input) {
    let ammount = Number(input[0]);
    let change = 0;
    let twoLeva = 0;
    let lev = 0;
    let fifty = 0;
    let twenty = 0;
    let ten = 0;
    let five = 0;
    let two = 0;
    let one = 0;
    if(ammount >= 2) {
        twoLeva = Math.floor(ammount / 2);
        change = (ammount % 2).toFixed(2);
        if(change >= 1) {
            change = (change - 1.00).toFixed(2);
            lev++;
            if(change >= 0.50) {
                change = (change - 0.50).toFixed(2);
                fifty++;
                if(change >= 0.20) {
                    twenty = Math.floor(change / 0.20);
                    change = (change % 0.20).toFixed(2);
                    if(change >= 0.10) {
                        change = (change - 0.10).toFixed(2);
                        ten++;
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    } else {
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    }
                } else {
                    if(change >= 0.10) {
                        change = (change - 0.10).toFixed(2);
                        ten++;
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    } else {
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    }
                }
            } else {
                if(change >= 0.20) {
                    twenty = Math.floor(change / 0.20);
                    change = (change % 0.20).toFixed(2);
                    if(change >= 0.10) {
                        change = (change - 0.10).toFixed(2);
                        ten++;
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    } else {
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    }
                } else {
                    if(change >= 0.10) {
                        change = (change - 0.10).toFixed(2);
                        ten++;
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    } else {
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    }
                }
            }
        } else {
            if(change >= 0.50) {
                change = (change - 0.50).toFixed(2);
                fifty++;
                if(change >= 0.20) {
                    twenty = Math.floor(change / 0.20);
                    change = (change % 0.20).toFixed(2);
                    if(change >= 0.10) {
                        change = (change - 0.10).toFixed(2);
                        ten++;
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    } else {
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    }
                } else {
                    if(change >= 0.10) {
                        change = (change - 0.10).toFixed(2);
                        ten++;
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    } else {
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    }
                }
            } else {
                if(change >= 0.20) {
                    twenty = Math.floor(change / 0.20);
                    change = (change % 0.20).toFixed(2);
                    if(change >= 0.10) {
                        change = (change - 0.10).toFixed(2);
                        ten++;
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    } else {
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    }
                } else {
                    if(change >= 0.10) {
                        change = (change - 0.10).toFixed(2);
                        ten++;
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    } else {
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        change = ammount;
        if(change >= 1) {
            change = (change - 1.00).toFixed(2);
            lev++;
            if(change >= 0.50) {
                change = (change - 0.50).toFixed(2);
                fifty++;
                if(change >= 0.20) {
                    twenty = Math.floor(change / 0.20);
                    change = (change % 0.20).toFixed(2);
                    if(change >= 0.10) {
                        change = (change - 0.10).toFixed(2);
                        ten++;
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    } else {
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    }
                } else {
                    if(change >= 0.10) {
                        change = (change - 0.10).toFixed(2);
                        ten++;
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    } else {
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    }
                }
            } else {
                if(change >= 0.20) {
                    twenty = Math.floor(change / 0.20);
                    change = (change % 0.20).toFixed(2);
                    if(change >= 0.10) {
                        change = (change - 0.10).toFixed(2);
                        ten++;
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    } else {
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    }
                } else {
                    if(change >= 0.10) {
                        change = (change - 0.10).toFixed(2);
                        ten++;
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    } else {
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    }
                }
            }
        } else {
            if(change >= 0.50) {
                change = (change - 0.50).toFixed(2);
                fifty++;
                if(change >= 0.20) {
                    twenty = Math.floor(change / 0.20);
                    change = (change % 0.20).toFixed(2);
                    if(change >= 0.10) {
                        change = (change - 0.10).toFixed(2);
                        ten++;
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    } else {
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    }
                } else {
                    if(change >= 0.10) {
                        change = (change - 0.10).toFixed(2);
                        ten++;
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    } else {
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    }
                }
            } else {
                if(change >= 0.20) {
                    twenty = Math.floor(change / 0.20);
                    change = (change % 0.20).toFixed(2);
                    if(change >= 0.10) {
                        change = (change - 0.10).toFixed(2);
                        ten++;
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    } else {
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    }
                } else {
                    if(change >= 0.10) {
                        change = (change - 0.10).toFixed(2);
                        ten++;
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    } else {
                        if(change >= 0.05) {
                            change = (change - 0.05).toFixed(2);
                            five++;
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        } else {
                            if(change >= 0.02) {
                                two = Math.floor(change / 0.02);
                                change = (change % 0.02).toFixed(2);
                                if(change == 0.01) {
                                    one++;
                                }
                            } else {
                                if(change == 0.01) {
                                    one++;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    let coins = twoLeva + lev + fifty + twenty + ten + five + two + one;
    console.log(coins);
}

modul(["11.98"]);