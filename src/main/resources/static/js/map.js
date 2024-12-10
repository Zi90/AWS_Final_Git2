
   function getLocation() {
      const status = document.getElementById("status");
        let latValue = 0.0;
        let lngValue = 0.0;

      // Geolocation API 지원 여부 확인
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude, accuracy } = position.coords;
            latValue = latitude;
            lngValue = longitude;
          //  status.textContent = `위도: ${latitude}, 경도: ${longitude}, 정확도: ${accuracy}미터`;
            status.textContent = `<div id="map" style="width:500px;height:400px;"></div>`;
          },
          (error) => {
            status.textContent = `위치 정보를 가져올 수 없습니다: ${error.message}`;
          },
          {
            enableHighAccuracy: true, // 정확도 우선 모드
            timeout: 10000,           // 10초 이내에 응답 없으면 에러 발생
            maximumAge: 0             // 항상 최신 위치 정보 수집
          }
        );
        // 지도로 띄우기
         var container = document.getElementById('map');
         var options = {
             center: new kakao.maps.LatLng(latValue, lngValue),
             level: 3
         };

         var map = new kakao.maps.Map(container, options);
      } else {
        status.textContent = "브라우저가 위치 서비스를 지원하지 않습니다.";
      }
   }


 // 위도, 경도의 위치를 지도로 띄우기
/* var container = document.getElementById('map');
       var options = {
           center: new kakao.maps.LatLng(33.450701, 126.570667),
           level: 3
       };

       var map = new kakao.maps.Map(container, options);*/
