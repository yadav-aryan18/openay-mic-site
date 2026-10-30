// Release data for the OpenAY Mic website prototypes.
//
// This mirrors the subset of the GitHub REST shape we render
// (GET /repos/yadav-aryan18/openay-mic/releases), so the production site can
// generate this file at deploy time with:
//     gh api repos/yadav-aryan18/openay-mic/releases
// and a small transform step — no client-side API calls, no rate limits.
//
// Snapshot taken 2026-10-31. Asset URLs follow the standard GitHub pattern:
//   https://github.com/<owner>/<repo>/releases/download/<tag>/<filename>

window.OPENAY_SITE = {
  repo: "yadav-aryan18/openay-mic",
  repoUrl: "https://github.com/yadav-aryan18/openay-mic",
  releasesUrl: "https://github.com/yadav-aryan18/openay-mic/releases",
  snapshot: "2026-10-31",
  releases: [
    {
      tag: "v0.3.0",
      name: "OpenAY Mic 0.3.0",
      date: "2026-10-30",
      latest: true,
      summary:
        "LISTEN monitor, output gain, voice processing on the phone, control-plane handshake, UDP peer latch, bundled adb on Windows.",
      notes: [
        {
          h: "Added",
          items: [
            "LISTEN (mic test) toggle — play your own received mic audio on a local output without interrupting the microphone.",
            "Output gain (0–4) with a GUI slider; applied after decode, before the jitter buffer.",
            "Opt-in echo cancellation and noise suppression on the phone (API 28+).",
            "Control-plane handshake and receiver liveness ping; a peer gone silent for 5 s is flagged.",
            "UDP peer latch — once the first datagram is accepted, only that source can feed the mic.",
            "Windows dist bundles adb, so USB forwarding needs no separate SDK install.",
          ],
        },
        {
          h: "Fixed",
          items: [
            "Jitter prebuffer decay no longer treats keepalive control traffic as audio.",
          ],
        },
      ],
      assets: [
        {
          name: "openay-mic-0.3.0-android.apk",
          label: "Android",
          hint: "Phone app — captures and streams over Wi-Fi or USB",
          size: 13848639,
          url: "https://github.com/yadav-aryan18/openay-mic/releases/download/v0.3.0/openay-mic-0.3.0-android.apk",
        },
        {
          name: "openay-mic-0.3.0-android-bluetooth.apk",
          label: "Android · BT build",
          hint: "Variant with the Bluetooth transport enabled",
          size: 13907317,
          url: "https://github.com/yadav-aryan18/openay-mic/releases/download/v0.3.0/openay-mic-0.3.0-android-bluetooth.apk",
        },
        {
          name: "openay-mic-0.3.0-linux-x86_64.tar.gz",
          label: "Linux x86_64",
          hint: "openay-server + openay-gui · PipeWire virtual microphone",
          size: 5684554,
          url: "https://github.com/yadav-aryan18/openay-mic/releases/download/v0.3.0/openay-mic-0.3.0-linux-x86_64.tar.gz",
        },
        {
          name: "openay-mic-0.3.0-windows-x86_64.zip",
          label: "Windows x86_64",
          hint: "openay-server.exe + openay-gui.exe · WASAPI output · adb bundled",
          size: 7788335,
          url: "https://github.com/yadav-aryan18/openay-mic/releases/download/v0.3.0/openay-mic-0.3.0-windows-x86_64.zip",
        },
      ],
    },
    {
      tag: "v0.2.0",
      name: "v0.2.0 — Windows client, adaptive jitter, measurement kit",
      date: "2026-10-27",
      latest: false,
      summary:
        "Windows client with full GUI parity, adaptive jitter buffer, deterministic network proxy, latency/CPU measurement kit.",
      notes: [
        {
          h: "Added",
          items: [
            "Windows receiver: WASAPI output, system tray, full GUI parity with Linux (The Chain, VU ladder, ON AIR).",
            "Adaptive jitter buffer: +2 ms per underrun toward a 20 ms ceiling, −1 ms per quiet minute, live retarget.",
            "openay-proxy: deterministic loss/burst/jitter profiles for reproducible network testing.",
            "Measurement kit: software latency probe (p50/p95) and CPU budget assertions.",
          ],
        },
      ],
      assets: [
        {
          name: "openay-mic-0.2.0-linux-x86_64.tar.gz",
          label: "Linux x86_64",
          hint: "openay-server + openay-gui · PipeWire virtual microphone",
          size: 5361920,
          url: "https://github.com/yadav-aryan18/openay-mic/releases/download/v0.2.0/openay-mic-0.2.0-linux-x86_64.tar.gz",
        },
        {
          name: "openay-mic-0.2.0-windows-x86_64.zip",
          label: "Windows x86_64",
          hint: "openay-server.exe + openay-gui.exe · WASAPI output",
          size: 3538201,
          url: "https://github.com/yadav-aryan18/openay-mic/releases/download/v0.2.0/openay-mic-0.2.0-windows-x86_64.zip",
        },
      ],
    },
    {
      tag: "v0.1.0",
      name: "v0.1.0 — first prototype",
      date: "2026-08-27",
      latest: false,
      summary:
        "First working prototype: frozen protocol v1, Wi-Fi/USB transports, PCM/Opus, PipeWire virtual microphone.",
      notes: [
        {
          h: "Shipped",
          items: [
            "Wire protocol frozen at v1 (shared/protocol.md) with golden test vectors.",
            "UDP and TCP transports; raw PCM 48 kHz and Opus 10 ms low-delay frames.",
            "PipeWire virtual source on Linux — a real, system-wide microphone.",
            "Android Oboe low-latency capture engine; Compose phone app and Iced desktop console.",
          ],
        },
      ],
      assets: [
        {
          name: "openay-mic-v0.1.0-debug.apk",
          label: "Android",
          hint: "Phone app (debug build)",
          size: 13732341,
          url: "https://github.com/yadav-aryan18/openay-mic/releases/download/v0.1.0/openay-mic-v0.1.0-debug.apk",
        },
        {
          name: "openay-mic-v0.1.0-x86_64-linux-gnu.tar.gz",
          label: "Linux x86_64",
          hint: "openay-server + openay-gui · PipeWire virtual microphone",
          size: 6475768,
          url: "https://github.com/yadav-aryan18/openay-mic/releases/download/v0.1.0/openay-mic-v0.1.0-x86_64-linux-gnu.tar.gz",
        },
        {
          name: "SHA256SUMS.txt",
          label: "Checksums",
          hint: "SHA-256 of every file in this release",
          size: 202,
          url: "https://github.com/yadav-aryan18/openay-mic/releases/download/v0.1.0/SHA256SUMS.txt",
        },
      ],
    },
  ],
};
