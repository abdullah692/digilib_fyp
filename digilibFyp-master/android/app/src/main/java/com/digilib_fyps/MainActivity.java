package com.digilib_fyps;
import expo.modules.ReactActivityDelegateWrapper;
import com.facebook.react.ReactActivityDelegate;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;


public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState)
  {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "digilib_fyps";
  }
//  @Override
//protected void onCreate(Bundle savedInstanceState) {
//  super.onCreate(null);
//}

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegateWrapper(this,
      new ReactActivityDelegate(this, getMainComponentName())
    );
  }
}
