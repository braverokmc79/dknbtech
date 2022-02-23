

	// 2. 이 코드는 IFrame Player API 코드를 비동기적으로 로드합니다.
		var tag = document.createElement('script');

		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		// 3. 이 함수는 <iframe>(및 YouTube 플레이어)을 생성합니다.
		// API 코드 다운로드 후.
		var idAry = [],
			urlAry = [],
			objAry = [];

		const videoId=document.querySelector("#videoId").value;


		function onYouTubeIframeAPIReady() {
			var player;
			player = new YT.Player('player', {
				videoId: videoId,

				width: '1920px',
				height: '1080px',
				playerVars: {
					'controls': 0, 
					'rel': 1, 
					'playsinline': 1, 
					'autoplay': 1,
					'modestbranding': 1,
					'loop': 1,
					'mute': 1,
					'showsearch': 0,
					'modestbranding': 0,
					'playlist': videoId
				}
			});

			objAry.push(player);
		}


		// 4. API는 비디오 플레이어가 준비되면 이 함수를 호출합니다.
		function onPlayerReady(event) {
		 	event.target.playVideo();
		}

		// 5. API는 플레이어의 상태가 변경될 때 이 함수를 호출합니다.
		// 이 함수는 비디오를 재생할 때(상태=1),
		// 플레이어는 6초 동안 재생한 다음 중지해야 합니다.
		var done = false;

		function onPlayerStateChange(event) {
			if (event.data == YT.PlayerState.PLAYING && !done) {
				setTimeout(stopVideo, 6000);
				done = true;
			}
		}

		function stopVideo() {
			player.stopVideo();
		}

