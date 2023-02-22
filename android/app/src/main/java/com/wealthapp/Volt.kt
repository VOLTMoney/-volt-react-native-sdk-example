package com.wealthapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import com.voltmoney.voltsdk.VoltAPIResponse
import com.voltmoney.voltsdk.VoltSDKContainer
import com.voltmoney.voltsdk.models.PreCreateAppResponse

class Volt : AppCompatActivity(), VoltAPIResponse {
    var appResponse: AppResponse?= null


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_volt)
         var voltSDKContainer = VoltSDKContainer(this@Volt,
            Constants.APP_KEY,
            Constants.APP_SECRET_KEY,
            "SDK_INVESTWELL",
            intent.getStringExtra(Constants.PRIMARY_COLOR),
            intent.getStringExtra(Constants.SECONDARY_COLOR),
            "ref")
        if(intent.extras?.getBoolean(Constants.INIT_VOLT) == true) {
            voltSDKContainer.initVoltSdk(0)
        }

    }

    override fun preCreateAppAPIResponse(
        preCreateAppResponse: PreCreateAppResponse?,
        errorMsg: String?
    ) {
        if (preCreateAppResponse?.customerAccountId !=null) {
            Toast.makeText(
                this,
                "Customer Id is: " +appResponse?.customerCreditApplicationId,
                Toast.LENGTH_SHORT
            ).show()
        }else{
            Toast.makeText(
                this,
                "Some error",
                Toast.LENGTH_SHORT
            ).show()
        }
    }
}