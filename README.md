# WordPress Performance Optimization Scripts

워드프레스 사이트 성능을 최적화하기 위해 작성된 세 가지 레이지 로딩(Lazy Loading) 스크립트를 포함합니다. Google AdSense, Google Tag Manager(GTM), YouTube iframe과 같은 외부 리소스를 효율적으로 로드하여 초기 페이지 로딩 성능을 개선합니다.


## **스크립트 목록**

### 1. `lazyload-adsense.js`
- **기능**:
  - Google AdSense 스크립트를 스크롤 이벤트 기반으로 동적으로 로드합니다.
  - 워드프레스 테마에 AdSense 광고를 추가할 때 초기 로드 속도를 최적화합니다.

- **사용 방법**:
  1. `ADSENSE_CLIENT_ID`를 Google AdSense 계정에서 발급받은 ID로 교체합니다.
  2. `lazyload-adsense.js` 파일을 테마 폴더의 `js` 디렉토리에 저장합니다:
     - 경로: `wp-content/themes/your-theme/js/lazyload-adsense.js`
  3. 다음 코드를 `functions.php`에 추가하여 스크립트를 로드합니다:
     ```php
     add_action('wp_footer', function() {
         wp_enqueue_script('lazyload_adsense', get_stylesheet_directory_uri() . '/js/lazyload-adsense.js', [], 'v1.0.0', true);
     }, 11);
     ```



### 2. `lazyload-gtm.js`
- **기능**:
  - Google Tag Manager(GTM) 스크립트를 스크롤 이벤트 발생 시 동적으로 로드합니다.
  - GTM 태그 로드로 인해 발생하는 초기 로드 지연 문제를 해결합니다.

- **사용 방법**:
  1. `GTM_ID`를 Google Tag Manager 계정에서 발급받은 ID로 교체합니다.
  2. `lazyload-gtm.js` 파일을 테마 폴더의 `js` 디렉토리에 저장합니다:
     - 경로: `wp-content/themes/your-theme/js/lazyload-gtm.js`
  3. 다음 코드를 `functions.php`에 추가하여 스크립트를 로드합니다:
     ```php
     add_action('wp_footer', function() {
         wp_enqueue_script('lazyload_gtm', get_stylesheet_directory_uri() . '/js/lazyload-gtm.js', [], 'v1.0.0', true);
     }, 11);
     ```
  


### 3. `youtube-lazy-load.js`
- **기능**:
  - 워드프레스의 YouTube iframe을 썸네일로 대체하여 초기 로드 성능을 개선합니다.
  - 썸네일을 클릭하면 실제 YouTube 플레이어가 로드됩니다.

- **사용 방법**:
  1. `youtube-lazy-load.js` 파일을 테마 폴더의 `js` 디렉토리에 저장합니다:
     - 경로: `wp-content/themes/your-theme/js/youtube-lazy-load.js`
  2. 다음 코드를 `functions.php`에 추가하여 스크립트를 로드합니다:
     ```php
     add_action('wp_footer', function() {
         wp_enqueue_script('youtube_lazyload', get_stylesheet_directory_uri() . '/js/youtube-lazy-load.js', [], 'v1.0.0', true);
     }, 11);
     ```


## **기대 효과**
- **페이지 로드 속도 개선**: 초기 리소스 로드를 지연시켜 사용자가 더 빠르게 페이지를 이용할 수 있도록 최적화합니다.
- **사용자 경험 향상**: 광고, 태그, 동영상과 같은 외부 리소스가 필요한 시점에만 로드됩니다.
- **효율적인 리소스 관리**: 불필요한 초기 네트워크 요청을 줄이고 성능 최적화를 지원합니다.

## 성능 테스트 결과

스크립트 적용 후 **PageSpeed Insights**에서 아래와 같은 성능 점수를 달성했습니다.

- **성능 점수**: 99
- **주요 개선 사항**:
  - 불필요한 리소스 초기 로드 지연 제거
  - 광고 및 외부 스크립트의 레이지 로딩 적용
  - YouTube iframe 썸네일 대체로 렌더링 최적화
    
<img width="349" alt="성능" src="https://github.com/user-attachments/assets/35a5d81b-9d27-4e90-80cb-fc44bf733489" />
