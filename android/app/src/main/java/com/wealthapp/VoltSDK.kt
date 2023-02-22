package com.wealthapp

import android.content.Context
import android.content.Intent
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.voltmoney.voltsdk.VoltAPIResponse
import com.voltmoney.voltsdk.models.PreCreateAppResponse

class VoltSDK (private val context: Context) : VoltAPIResponse, ReactContextBaseJavaModule() {
    var appResponse: AppResponse?= null

    override fun preCreateAppAPIResponse(
        preCreateAppResponse: PreCreateAppResponse?,
        errorMsg: String?
    ) {

    }

    override fun getName(): String {
        return "VoltSDK"
    }

    @ReactMethod
    fun initializeVoltApplication(primaryColor: String, secondaryColor: String) {
        val intent = Intent(context, Volt::class.java)
        intent.putExtra(Constants.INIT_VOLT,true)
        intent.putExtra(Constants.PRIMARY_COLOR, primaryColor)
        intent.putExtra(Constants.SECONDARY_COLOR, secondaryColor)
        intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
        context.startActivity(intent)
    }

    @ReactMethod
    fun startVoltSDK() {
        val intent = Intent(context, Volt::class.java)
        intent.putExtra(Constants.START_VOLT,true)
        context.startActivity(intent)
    }




}