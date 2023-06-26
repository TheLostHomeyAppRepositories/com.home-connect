"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HomeConnectDriver_1 = __importDefault(require("../../lib/HomeConnectDriver"));
class HomeConnectDriverWarmingDrawer extends HomeConnectDriver_1.default {
    _onPairFilter(homeAppliance) {
        return homeAppliance.type === 'WarmingDrawer';
    }
}
module.exports = HomeConnectDriverWarmingDrawer;
