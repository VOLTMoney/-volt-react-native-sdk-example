# Volt React Native SDK Example
This repository consists the code of the example app - <b>WealthApp</b> in which the Mobile SDK of Volt is integrated. </br>

## SDK Integration
1. Create a Kotlin class inside the Android folder and extend the `ReactContextBaseJavaModule` interface.</br>
Override the method `getName` and enter the name you want to give to this module. </br>
<b>Note:</b> The name you give inside getName will be the name you will be accessing the file in JS module. </br>
```
    override fun getName(): String {
        return "VoltSDK"
    }
```
2. In the same class, create another method with a prefix `@ReactMethod`. The methods only with the prefix can be accessed while bridging and rest of the methods are just regular methods. </br>
```
  @ReactMethod
    fun initializeVoltApplication(primaryColor: String, secondaryColor: String) {
        val intent = Intent(context, Volt::class.java)
        intent.putExtra(Constants.INIT_VOLT,true)
        intent.putExtra(Constants.PRIMARY_COLOR, primaryColor)
        intent.putExtra(Constants.SECONDARY_COLOR, secondaryColor)
        intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
        context.startActivity(intent)
    }
```
Create an Empty Activity `Volt` and call this activity with an Intent inside the React Method. </br>

3. Create another class which'll be the main class for bridging which extends `ReactPackage`. </br>
Override the new methods `createNativeModules` and `createViewManagers`.</br>
Inside the `createNativeModules` create an empty Mutable List and add the VoltSDK class inside it. </br>
```
    override fun createNativeModules(reactContext: ReactApplicationContext): MutableList<NativeModule> {
        val modules: MutableList<NativeModule> = ArrayList()
        modules.add(VoltSDK(reactContext))
        return modules.toMutableList()
    }
```
Inside the `createViewManagers`, return Collections.emptyList() 
```
    override fun createViewManagers(reactContext: ReactApplicationContext): MutableList<ViewManager<View, ReactShadowNode<*>>> {
        return Collections.emptyList()
    }
```
4. Finally, in the `MainApplication` class of Android inside the `getPackages` method, uncomment the code and add the package of `VoltManager`. </br>
```
      @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
            packages.add(new VoltManager());
          return packages;
        }
```
5. We're all set and the last step is to call the package and method inside our JS module to access the methods in Native Module.</br>
Import `NativeModules` from React-Native. </br>
Create a const variable and call your class inside Native Module </br>
```
const voltSDK =  NativeModules.VoltSDK
```
Finally, access the methods inside voltSDK like so, </br>
```
 const openVoltSDK = () => {
        return voltSDK.initializeVoltApplication(primaryColor, secondaryColor)
    }
```
