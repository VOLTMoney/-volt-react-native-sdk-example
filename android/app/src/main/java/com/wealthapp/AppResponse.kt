package com.wealthapp

data class AppResponse(
    val customerAccountId: String?,
    val customerCreditApplicationId: String?,
    val message: String?,
    val statusCode: String?,
    val violations: String?
)
