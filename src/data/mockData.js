const data = [{
    "entity_id": "person.olexii_bulhakov",
    "state": "home",
    "attributes": {
        "editable": true,
        "id": "olexii_bulhakov",
        "latitude": 49.98879471697223,
        "longitude": 36.23514029647828,
        "gps_accuracy": 20,
        "source": "device_tracker.demo_home_boy",
        "user_id": "e49eb0d1722b46189ea623d7bf9b8046",
        "friendly_name": "Olexii Bulhakov"
    },
    "last_changed": "2023-04-19T13:13:14.129681+00:00",
    "last_updated": "2023-04-19T13:13:14.129681+00:00",
    "context": {
        "id": "01GYCTBMMHJKE2AFR016WD851W",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sun.sun",
    "state": "above_horizon",
    "attributes": {
        "next_dawn": "2023-04-21T01:53:08.642970+00:00",
        "next_dusk": "2023-04-20T17:14:01.955708+00:00",
        "next_midnight": "2023-04-20T21:33:51+00:00",
        "next_noon": "2023-04-21T09:33:55+00:00",
        "next_rising": "2023-04-21T02:28:56.330711+00:00",
        "next_setting": "2023-04-20T16:38:11.449136+00:00",
        "elevation": 51.52,
        "azimuth": 180.03,
        "rising": false,
        "friendly_name": "Sun"
    },
    "last_changed": "2023-04-20T02:32:55.340281+00:00",
    "last_updated": "2023-04-20T09:34:07.002886+00:00",
    "context": {
        "id": "01GYF074MTXSQSP95R12VPVCMS",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "zone.home",
    "state": "1",
    "attributes": {
        "latitude": 49.98881471697223,
        "longitude": 36.23512029647828,
        "radius": 100,
        "passive": false,
        "persons": ["person.olexii_bulhakov"],
        "editable": true,
        "icon": "mdi:home",
        "friendly_name": "Home Assistant"
    },
    "last_changed": "2023-04-19T13:13:14.129920+00:00",
    "last_updated": "2023-04-19T13:13:14.129920+00:00",
    "context": {
        "id": "01GYCTBMMH0NDVZTXZ5CARSRWR",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "persistent_notification.notification",
    "state": "notifying",
    "attributes": {
        "message": "This is an example of a persistent notification.",
        "title": "Example Notification",
        "friendly_name": "Example Notification"
    },
    "last_changed": "2023-04-18T18:26:54.998720+00:00",
    "last_updated": "2023-04-18T18:26:54.998720+00:00",
    "context": {
        "id": "01GYASX9CPT0575WRMQXQZC7CF",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.sun_next_dawn",
    "state": "2023-04-21T01:53:08+00:00",
    "attributes": {
        "device_class": "timestamp",
        "icon": "mdi:sun-clock",
        "friendly_name": "Sun Наступний світанок"
    },
    "last_changed": "2023-04-20T01:55:30.281860+00:00",
    "last_updated": "2023-04-20T01:55:30.281860+00:00",
    "context": {
        "id": "01GYE5ZCV9AF2DDJ1X3HCN9W42",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.sun_next_dusk",
    "state": "2023-04-20T17:14:01+00:00",
    "attributes": {
        "device_class": "timestamp",
        "icon": "mdi:sun-clock",
        "friendly_name": "Sun Наступні сутінки"
    },
    "last_changed": "2023-04-19T17:12:28.599302+00:00",
    "last_updated": "2023-04-19T17:12:28.599302+00:00",
    "context": {
        "id": "01GYD81PNQCTBPVGNN4XBY0YGT",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.sun_next_midnight",
    "state": "2023-04-20T21:33:51+00:00",
    "attributes": {
        "device_class": "timestamp",
        "icon": "mdi:sun-clock",
        "friendly_name": "Sun Наступна північ"
    },
    "last_changed": "2023-04-19T21:34:29.551834+00:00",
    "last_updated": "2023-04-19T21:34:29.551834+00:00",
    "context": {
        "id": "01GYDQ1F5FHQFDC9SCN68EF6AM",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.sun_next_noon",
    "state": "2023-04-21T09:33:55+00:00",
    "attributes": {
        "device_class": "timestamp",
        "icon": "mdi:sun-clock",
        "friendly_name": "Sun Наступний полудень"
    },
    "last_changed": "2023-04-20T09:34:31.506992+00:00",
    "last_updated": "2023-04-20T09:34:31.506992+00:00",
    "context": {
        "id": "01GYF07WJJKEJ1DAN9NNT5AZ6R",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.sun_next_rising",
    "state": "2023-04-21T02:28:56+00:00",
    "attributes": {
        "device_class": "timestamp",
        "icon": "mdi:sun-clock",
        "friendly_name": "Sun Наступний схід"
    },
    "last_changed": "2023-04-20T02:31:00.354066+00:00",
    "last_updated": "2023-04-20T02:31:00.354066+00:00",
    "context": {
        "id": "01GYE80D02H6J7FPJFKNEY46HP",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.sun_next_setting",
    "state": "2023-04-20T16:38:11+00:00",
    "attributes": {
        "device_class": "timestamp",
        "icon": "mdi:sun-clock",
        "friendly_name": "Sun Наступний захід"
    },
    "last_changed": "2023-04-19T16:36:58.457399+00:00",
    "last_updated": "2023-04-19T16:36:58.457399+00:00",
    "context": {
        "id": "01GYD60PES8H5S50D4YVBB04XN",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "device_tracker.demo_paulus",
    "state": "not_home",
    "attributes": {
        "source_type": "gps",
        "latitude": 49.99476971697223,
        "longitude": 36.24252529647828,
        "gps_accuracy": 100,
        "battery": 57,
        "friendly_name": "Paulus"
    },
    "last_changed": "2023-04-18T18:26:55.044177+00:00",
    "last_updated": "2023-04-18T18:26:55.191434+00:00",
    "context": {
        "id": "01GYASX9JQJKG1JDR5PN18C143",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "device_tracker.demo_anne_therese",
    "state": "not_home",
    "attributes": {
        "source_type": "gps",
        "latitude": 49.97929471697223,
        "longitude": 36.22734029647828,
        "gps_accuracy": 80,
        "battery": 59,
        "friendly_name": "Anne Therese"
    },
    "last_changed": "2023-04-18T18:26:55.044247+00:00",
    "last_updated": "2023-04-18T18:26:55.191538+00:00",
    "context": {
        "id": "01GYASX9JQ7EQQY2H5BN27Y4SH",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "device_tracker.demo_home_boy",
    "state": "home",
    "attributes": {
        "source_type": "gps",
        "latitude": 49.98879471697223,
        "longitude": 36.23514029647828,
        "gps_accuracy": 20,
        "battery": 53,
        "friendly_name": "Home Boy"
    },
    "last_changed": "2023-04-18T18:26:55.191612+00:00",
    "last_updated": "2023-04-18T18:26:55.191612+00:00",
    "context": {
        "id": "01GYASX9JQEZQMGKTKDVG12NFE",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "mailbox.demomailbox",
    "state": "10",
    "attributes": {
        "friendly_name": "DemoMailbox"
    },
    "last_changed": "2023-04-18T18:26:55.197083+00:00",
    "last_updated": "2023-04-18T18:26:55.197083+00:00",
    "context": {
        "id": "01GYASX9JXX0EMASCYWG9XHYBV",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.outside_temperature",
    "state": "15.6",
    "attributes": {
        "state_class": "measurement",
        "battery_level": 12,
        "unit_of_measurement": "°C",
        "device_class": "temperature",
        "friendly_name": "Outside Temperature"
    },
    "last_changed": "2023-04-18T18:26:55.199173+00:00",
    "last_updated": "2023-04-18T18:26:55.199173+00:00",
    "context": {
        "id": "01GYASX9JZ0WVQHES2D66YSRE9",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.outside_humidity",
    "state": "54",
    "attributes": {
        "state_class": "measurement",
        "unit_of_measurement": "%",
        "device_class": "humidity",
        "friendly_name": "Outside Humidity"
    },
    "last_changed": "2023-04-18T18:26:55.199314+00:00",
    "last_updated": "2023-04-18T18:26:55.199314+00:00",
    "context": {
        "id": "01GYASX9JZYFGRB8CSF1Y5RV5A",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.carbon_monoxide",
    "state": "54",
    "attributes": {
        "state_class": "measurement",
        "unit_of_measurement": "ppm",
        "device_class": "carbon_monoxide",
        "friendly_name": "Carbon monoxide"
    },
    "last_changed": "2023-04-18T18:26:55.199430+00:00",
    "last_updated": "2023-04-18T18:26:55.199430+00:00",
    "context": {
        "id": "01GYASX9JZY9WBSP4BDVEF8C3T",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.carbon_dioxide",
    "state": "54",
    "attributes": {
        "state_class": "measurement",
        "battery_level": 14,
        "unit_of_measurement": "ppm",
        "device_class": "carbon_dioxide",
        "friendly_name": "Carbon dioxide"
    },
    "last_changed": "2023-04-18T18:26:55.199541+00:00",
    "last_updated": "2023-04-18T18:26:55.199541+00:00",
    "context": {
        "id": "01GYASX9JZXSFT49GPDZMHJRM5",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.power_consumption",
    "state": "100",
    "attributes": {
        "state_class": "measurement",
        "unit_of_measurement": "W",
        "device_class": "power",
        "friendly_name": "Power consumption"
    },
    "last_changed": "2023-04-18T18:26:55.199700+00:00",
    "last_updated": "2023-04-18T18:26:55.199700+00:00",
    "context": {
        "id": "01GYASX9JZT4YV8AVDTQXA66VD",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.none_rezhim_termostata",
    "state": "eco",
    "attributes": {
        "options": ["away", "comfort", "eco", "sleep"],
        "device_class": "enum",
        "friendly_name": "None Режим термостата"
    },
    "last_changed": "2023-04-18T18:26:55.200132+00:00",
    "last_updated": "2023-04-18T18:26:55.200132+00:00",
    "context": {
        "id": "01GYASX9K0YD0G50GBYZWXG6YM",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "camera.demo_camera",
    "state": "streaming",
    "attributes": {
        "access_token": "792353aa843fe3808e8ee5d9861a9cac6e3b3e15a7011c421ffd721ac11e0c68",
        "entity_picture": "/api/camera_proxy/camera.demo_camera?token=792353aa843fe3808e8ee5d9861a9cac6e3b3e15a7011c421ffd721ac11e0c68",
        "friendly_name": "Demo camera",
        "supported_features": 1
    },
    "last_changed": "2023-04-18T18:26:55.201039+00:00",
    "last_updated": "2023-04-20T09:36:55.512858+00:00",
    "context": {
        "id": "01GYF0C96RR6B5DCB16DWZ75RX",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "camera.demo_camera_png",
    "state": "streaming",
    "attributes": {
        "access_token": "b741a4d717c5599a488b6761c259cab378d5a4d0432280f46a130f650e78e9ee",
        "entity_picture": "/api/camera_proxy/camera.demo_camera_png?token=b741a4d717c5599a488b6761c259cab378d5a4d0432280f46a130f650e78e9ee",
        "friendly_name": "Demo camera png",
        "supported_features": 1
    },
    "last_changed": "2023-04-18T18:26:55.201143+00:00",
    "last_updated": "2023-04-20T09:36:55.512971+00:00",
    "context": {
        "id": "01GYF0C96RS99S9G95YNY9JK9E",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "media_player.living_room",
    "state": "playing",
    "attributes": {
        "sound_mode_list": ["Music", "Movie"],
        "volume_level": 1.0,
        "is_volume_muted": false,
        "media_content_id": "eyU3bRy2x44",
        "media_content_type": "movie",
        "media_duration": 300,
        "media_position": 45,
        "media_position_updated_at": "2023-04-18T18:26:55.198866+00:00",
        "media_title": "♥♥ The Best Fireplace Video (3 hours)",
        "app_name": "YouTube",
        "sound_mode": "Music",
        "shuffle": false,
        "entity_picture": "/api/media_player_proxy/media_player.living_room?token=5689ad3b3ea2b42682174a8ece697dcace38bcfd58c3682c353c80ebed3c0776&cache=bc2ffb49c4f67034",
        "friendly_name": "Living Room",
        "supported_features": 119695
    },
    "last_changed": "2023-04-18T18:26:55.202145+00:00",
    "last_updated": "2023-04-18T18:26:55.202145+00:00",
    "context": {
        "id": "01GYASX9K24S1P61C4Z89DCM2K",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "media_player.bedroom",
    "state": "playing",
    "attributes": {
        "sound_mode_list": ["Music", "Movie"],
        "volume_level": 1.0,
        "is_volume_muted": false,
        "media_content_id": "kxopViU98Xo",
        "media_content_type": "movie",
        "media_duration": 360000,
        "media_position": 54000,
        "media_position_updated_at": "2023-04-18T18:26:55.198869+00:00",
        "media_title": "Epic sax guy 10 hours",
        "app_name": "YouTube",
        "sound_mode": "Music",
        "shuffle": false,
        "entity_picture": "/api/media_player_proxy/media_player.bedroom?token=fe653e09ce4b2ac39312863762c7a0df8c8067a77845f6321b92d7d34826dd85&cache=e4513ed94ec89151",
        "friendly_name": "Bedroom",
        "supported_features": 119695
    },
    "last_changed": "2023-04-18T18:26:55.202254+00:00",
    "last_updated": "2023-04-18T18:26:55.202254+00:00",
    "context": {
        "id": "01GYASX9K2E79BG74C3ET60NFX",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "media_player.walkman",
    "state": "playing",
    "attributes": {
        "sound_mode_list": ["Music", "Movie"],
        "group_members": [],
        "volume_level": 1.0,
        "is_volume_muted": false,
        "media_content_id": "bounzz-1",
        "media_content_type": "music",
        "media_duration": 213,
        "media_title": "I Wanna Be A Hippy (Flamman & Abraxas Radio Mix)",
        "media_artist": "Technohead",
        "media_album_name": "Bounzz",
        "media_track": 1,
        "sound_mode": "Music",
        "shuffle": false,
        "repeat": "off",
        "entity_picture": "/api/media_player_proxy/media_player.walkman?token=0a5ab35e29fb9649dc01313a8d0a0386d912cea8206fa0f7f8bf54fc1d0d3b6e&cache=62c0c516acbc53a9",
        "friendly_name": "Walkman",
        "supported_features": 914877
    },
    "last_changed": "2023-04-18T18:26:55.202366+00:00",
    "last_updated": "2023-04-18T18:26:55.202366+00:00",
    "context": {
        "id": "01GYASX9K2XSZMQ34SG8RZV93V",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "media_player.kitchen",
    "state": "playing",
    "attributes": {
        "sound_mode_list": ["Music", "Movie"],
        "group_members": [],
        "volume_level": 1.0,
        "is_volume_muted": false,
        "media_content_id": "bounzz-1",
        "media_content_type": "music",
        "media_duration": 213,
        "media_title": "I Wanna Be A Hippy (Flamman & Abraxas Radio Mix)",
        "media_artist": "Technohead",
        "media_album_name": "Bounzz",
        "media_track": 1,
        "sound_mode": "Music",
        "shuffle": false,
        "repeat": "off",
        "entity_picture": "/api/media_player_proxy/media_player.kitchen?token=17f698b2345003094a3c5fe90ba074b7020adc908c4c1797b766c0cae76e0156&cache=62c0c516acbc53a9",
        "friendly_name": "Kitchen",
        "supported_features": 914877
    },
    "last_changed": "2023-04-18T18:26:55.202456+00:00",
    "last_updated": "2023-04-18T18:26:55.202456+00:00",
    "context": {
        "id": "01GYASX9K2XQ7G4NQJDF76TTVH",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "media_player.lounge_room",
    "state": "playing",
    "attributes": {
        "source_list": ["dvd", "youtube"],
        "sound_mode_list": ["Music", "Movie"],
        "volume_level": 1.0,
        "is_volume_muted": false,
        "media_content_id": "house-of-cards-1",
        "media_content_type": "tvshow",
        "media_duration": 3600,
        "media_title": "Chapter 1",
        "media_series_title": "House of Cards",
        "media_season": "1",
        "media_episode": "1",
        "app_name": "Netflix",
        "source": "dvd",
        "sound_mode": "Music",
        "shuffle": false,
        "device_class": "tv",
        "entity_picture": "/api/media_player_proxy/media_player.lounge_room?token=0aefdd74f9c2edf1d4193b870feaf3dfbb687add49c81a9a226aeb3353f6e8d7&cache=cb9d84451faf9351",
        "friendly_name": "Lounge room",
        "supported_features": 121265
    },
    "last_changed": "2023-04-18T18:26:55.202568+00:00",
    "last_updated": "2023-04-18T18:26:55.202568+00:00",
    "context": {
        "id": "01GYASX9K276TP9HC55MA0HJHE",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.total_energy_kwh",
    "state": "287.5",
    "attributes": {
        "state_class": "total",
        "unit_of_measurement": "kWh",
        "device_class": "energy",
        "friendly_name": "Total energy 1"
    },
    "last_changed": "2023-04-20T09:36:55.621410+00:00",
    "last_updated": "2023-04-20T09:36:55.621410+00:00",
    "context": {
        "id": "01GYF0C9A52YPK00WS8TYWJ1WT",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.total_energy_mwh",
    "state": "0.14375",
    "attributes": {
        "state_class": "total",
        "unit_of_measurement": "MWh",
        "device_class": "energy",
        "friendly_name": "Total energy 2"
    },
    "last_changed": "2023-04-20T09:36:55.621551+00:00",
    "last_updated": "2023-04-20T09:36:55.621551+00:00",
    "context": {
        "id": "01GYF0C9A5NQX23QBPYTMK6RG6",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.total_gas_m3",
    "state": "14.3750000000001",
    "attributes": {
        "state_class": "total",
        "unit_of_measurement": "m³",
        "device_class": "gas",
        "friendly_name": "Total gas 1"
    },
    "last_changed": "2023-04-20T09:36:55.621607+00:00",
    "last_updated": "2023-04-20T09:36:55.621607+00:00",
    "context": {
        "id": "01GYF0C9A5YP239DM0HM6789N5",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.total_gas_ft3",
    "state": "16.28",
    "attributes": {
        "state_class": "total",
        "unit_of_measurement": "m³",
        "device_class": "gas",
        "friendly_name": "Total gas 2"
    },
    "last_changed": "2023-04-20T09:36:55.621692+00:00",
    "last_updated": "2023-04-20T09:36:55.621692+00:00",
    "context": {
        "id": "01GYF0C9A52B001ABM11VA6YFQ",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "climate.heatpump",
    "state": "heat",
    "attributes": {
        "hvac_modes": ["heat", "off"],
        "min_temp": 7.0,
        "max_temp": 35.0,
        "current_temperature": 25.0,
        "temperature": 20.0,
        "hvac_action": "heating",
        "friendly_name": "HeatPump",
        "supported_features": 1
    },
    "last_changed": "2023-04-18T18:26:55.206446+00:00",
    "last_updated": "2023-04-18T18:26:55.206446+00:00",
    "context": {
        "id": "01GYASX9K63YTYMZDEBCW3ZK0G",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "climate.hvac",
    "state": "cool",
    "attributes": {
        "hvac_modes": ["off", "heat", "cool", "auto", "dry", "fan_only"],
        "min_temp": 7,
        "max_temp": 35,
        "min_humidity": 30,
        "max_humidity": 99,
        "fan_modes": ["on_low", "on_high", "auto_low", "auto_high", "off"],
        "swing_modes": ["auto", "1", "2", "3", "off"],
        "current_temperature": 22,
        "temperature": 21,
        "target_temp_high": null,
        "target_temp_low": null,
        "current_humidity": 54,
        "humidity": 67,
        "fan_mode": "On High",
        "hvac_action": "cooling",
        "swing_mode": "Off",
        "aux_heat": "off",
        "friendly_name": "Hvac",
        "supported_features": 111
    },
    "last_changed": "2023-04-18T18:26:55.206629+00:00",
    "last_updated": "2023-04-18T18:26:55.206629+00:00",
    "context": {
        "id": "01GYASX9K6MA0GGHC97E9K2193",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "climate.ecobee",
    "state": "heat_cool",
    "attributes": {
        "hvac_modes": ["off", "cool", "heat_cool", "auto", "dry", "fan_only"],
        "min_temp": 7,
        "max_temp": 35,
        "fan_modes": ["on_low", "on_high", "auto_low", "auto_high", "off"],
        "preset_modes": ["home", "eco"],
        "swing_modes": ["auto", "1", "2", "3", "off"],
        "current_temperature": 23,
        "target_temp_high": 27.5,
        "target_temp_low": 19.5,
        "fan_mode": "Auto Low",
        "preset_mode": "home",
        "swing_mode": "Auto",
        "friendly_name": "Ecobee",
        "supported_features": 58
    },
    "last_changed": "2023-04-18T18:26:55.206759+00:00",
    "last_updated": "2023-04-19T12:29:51.534499+00:00",
    "context": {
        "id": "01GYCQW71D1YCQSPYKYMPS7SBC",
        "parent_id": null,
        "user_id": "e49eb0d1722b46189ea623d7bf9b8046"
    }
}, {
    "entity_id": "cover.kitchen_window",
    "state": "closed",
    "attributes": {
        "friendly_name": "Kitchen Window",
        "supported_features": 11
    },
    "last_changed": "2023-04-18T18:26:55.207718+00:00",
    "last_updated": "2023-04-18T18:26:55.207718+00:00",
    "context": {
        "id": "01GYASX9K7Q8PCN6MMVWNFMDFN",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "cover.hall_window",
    "state": "opening",
    "attributes": {
        "current_position": 50,
        "friendly_name": "Hall Window",
        "supported_features": 15
    },
    "last_changed": "2023-04-19T12:32:54.568791+00:00",
    "last_updated": "2023-04-19T12:32:54.590346+00:00",
    "context": {
        "id": "01GYCR1SS86MCV36JDMSMFXAE8",
        "parent_id": null,
        "user_id": "e49eb0d1722b46189ea623d7bf9b8046"
    }
}, {
    "entity_id": "cover.living_room_window",
    "state": "closed",
    "attributes": {
        "current_position": 0,
        "current_tilt_position": 50,
        "friendly_name": "Living Room Window",
        "supported_features": 255
    },
    "last_changed": "2023-04-19T12:34:46.648542+00:00",
    "last_updated": "2023-04-19T12:34:46.648542+00:00",
    "context": {
        "id": "01GYCR577R49QGPXAMGCET0AGN",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "cover.garage_door",
    "state": "open",
    "attributes": {
        "device_class": "garage",
        "friendly_name": "Garage Door",
        "supported_features": 3
    },
    "last_changed": "2023-04-19T12:32:44.791986+00:00",
    "last_updated": "2023-04-19T12:32:44.791986+00:00",
    "context": {
        "id": "01GYCR1G7QCH2E7MKFXZPRFT1W",
        "parent_id": null,
        "user_id": "e49eb0d1722b46189ea623d7bf9b8046"
    }
}, {
    "entity_id": "cover.pergola_roof",
    "state": "closed",
    "attributes": {
        "current_tilt_position": 60,
        "friendly_name": "Pergola Roof",
        "supported_features": 240
    },
    "last_changed": "2023-04-18T18:26:55.208140+00:00",
    "last_updated": "2023-04-18T18:26:55.208140+00:00",
    "context": {
        "id": "01GYASX9K8JSXA201YVEZAJAWH",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "alarm_control_panel.security",
    "state": "disarmed",
    "attributes": {
        "code_format": "number",
        "changed_by": null,
        "code_arm_required": true,
        "friendly_name": "Security",
        "supported_features": 63
    },
    "last_changed": "2023-04-18T18:26:55.208253+00:00",
    "last_updated": "2023-04-18T18:26:55.208253+00:00",
    "context": {
        "id": "01GYASX9K8TYWZGJSBJ1EW6XEF",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "air_quality.demo_air_quality_home",
    "state": "14",
    "attributes": {
        "nitrogen_oxide": 100,
        "particulate_matter_10": 23,
        "particulate_matter_2_5": 14,
        "unit_of_measurement": "µg/m³",
        "attribution": "Powered by Home Assistant",
        "friendly_name": "Demo Air Quality Home"
    },
    "last_changed": "2023-04-18T18:26:55.208619+00:00",
    "last_updated": "2023-04-18T18:26:55.208619+00:00",
    "context": {
        "id": "01GYASX9K8G561S9JSTFDSH9NJ",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "air_quality.demo_air_quality_office",
    "state": "4",
    "attributes": {
        "particulate_matter_10": 16,
        "particulate_matter_2_5": 4,
        "unit_of_measurement": "µg/m³",
        "attribution": "Powered by Home Assistant",
        "friendly_name": "Demo Air Quality Office"
    },
    "last_changed": "2023-04-18T18:26:55.208692+00:00",
    "last_updated": "2023-04-18T18:26:55.208692+00:00",
    "context": {
        "id": "01GYASX9K81MMEGQ3E2E81J0J8",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "button.push",
    "state": "unknown",
    "attributes": {
        "icon": "mdi:gesture-tap-button",
        "friendly_name": "Push"
    },
    "last_changed": "2023-04-18T18:26:55.208802+00:00",
    "last_updated": "2023-04-18T18:26:55.208802+00:00",
    "context": {
        "id": "01GYASX9K8NPV32MDFSGYFRCJ9",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "humidifier.humidifier",
    "state": "on",
    "attributes": {
        "min_humidity": 0,
        "max_humidity": 100,
        "humidity": 68,
        "device_class": "humidifier",
        "friendly_name": "Humidifier",
        "supported_features": 0
    },
    "last_changed": "2023-04-18T18:26:55.209172+00:00",
    "last_updated": "2023-04-18T18:26:55.209172+00:00",
    "context": {
        "id": "01GYASX9K9ZG7C1SZ55DRRK207",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "humidifier.dehumidifier",
    "state": "on",
    "attributes": {
        "min_humidity": 0,
        "max_humidity": 100,
        "humidity": 77,
        "device_class": "dehumidifier",
        "friendly_name": "Dehumidifier",
        "supported_features": 0
    },
    "last_changed": "2023-04-18T18:26:55.209256+00:00",
    "last_updated": "2023-04-19T12:49:57.742948+00:00",
    "context": {
        "id": "01GYCS10ZE26FRXGWQ6P0WMGXY",
        "parent_id": null,
        "user_id": "e49eb0d1722b46189ea623d7bf9b8046"
    }
}, {
    "entity_id": "humidifier.hygrostat",
    "state": "on",
    "attributes": {
        "min_humidity": 0,
        "max_humidity": 100,
        "available_modes": ["home", "eco"],
        "humidity": 50,
        "mode": "home",
        "friendly_name": "Hygrostat",
        "supported_features": 1
    },
    "last_changed": "2023-04-18T18:26:55.209322+00:00",
    "last_updated": "2023-04-18T18:26:55.209322+00:00",
    "context": {
        "id": "01GYASX9K9QNKZ4F6CDBDWH2Y5",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "binary_sensor.basement_floor_wet",
    "state": "off",
    "attributes": {
        "device_class": "moisture",
        "friendly_name": "Basement Floor Wet"
    },
    "last_changed": "2023-04-18T18:26:55.209780+00:00",
    "last_updated": "2023-04-18T18:26:55.209780+00:00",
    "context": {
        "id": "01GYASX9K93JBAGEXT5NGZXC8D",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "binary_sensor.movement_backyard",
    "state": "on",
    "attributes": {
        "device_class": "motion",
        "friendly_name": "Movement Backyard"
    },
    "last_changed": "2023-04-18T18:26:55.209881+00:00",
    "last_updated": "2023-04-18T18:26:55.209881+00:00",
    "context": {
        "id": "01GYASX9K9EYQEQM3K5718QP4N",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "fan.living_room_fan",
    "state": "off",
    "attributes": {
        "preset_modes": ["auto", "smart", "sleep", "on"],
        "direction": "forward",
        "oscillating": false,
        "percentage": null,
        "percentage_step": 33.333333333333336,
        "preset_mode": null,
        "friendly_name": "Living Room Fan",
        "supported_features": 7
    },
    "last_changed": "2023-04-18T18:26:55.210860+00:00",
    "last_updated": "2023-04-18T18:26:55.210860+00:00",
    "context": {
        "id": "01GYASX9KAH2TVCEGRWZEHD52Y",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "fan.ceiling_fan",
    "state": "off",
    "attributes": {
        "preset_modes": null,
        "percentage": null,
        "percentage_step": 33.333333333333336,
        "preset_mode": null,
        "friendly_name": "Ceiling Fan",
        "supported_features": 1
    },
    "last_changed": "2023-04-18T18:26:55.210962+00:00",
    "last_updated": "2023-04-18T18:26:55.210962+00:00",
    "context": {
        "id": "01GYASX9KA0VY7CANMARNESCMX",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "fan.percentage_full_fan",
    "state": "off",
    "attributes": {
        "preset_modes": ["auto", "smart", "sleep", "on"],
        "direction": "forward",
        "oscillating": false,
        "percentage": null,
        "percentage_step": 33.333333333333336,
        "preset_mode": null,
        "friendly_name": "Percentage Full Fan",
        "supported_features": 7
    },
    "last_changed": "2023-04-18T18:26:55.211059+00:00",
    "last_updated": "2023-04-18T18:26:55.211059+00:00",
    "context": {
        "id": "01GYASX9KBBMHBNQ7GYF5Z6TGC",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "fan.percentage_limited_fan",
    "state": "off",
    "attributes": {
        "preset_modes": ["auto", "smart", "sleep", "on"],
        "percentage": null,
        "percentage_step": 33.333333333333336,
        "preset_mode": null,
        "friendly_name": "Percentage Limited Fan",
        "supported_features": 1
    },
    "last_changed": "2023-04-18T18:26:55.211141+00:00",
    "last_updated": "2023-04-18T18:26:55.211141+00:00",
    "context": {
        "id": "01GYASX9KB7WGBK83ZYRNYEH60",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "fan.preset_only_limited_fan",
    "state": "off",
    "attributes": {
        "preset_modes": ["auto", "smart", "sleep", "on"],
        "preset_mode": null,
        "friendly_name": "Preset Only Limited Fan",
        "supported_features": 8
    },
    "last_changed": "2023-04-18T18:26:55.211287+00:00",
    "last_updated": "2023-04-18T18:26:55.211287+00:00",
    "context": {
        "id": "01GYASX9KBVTAY9WZW0TBX0MRM",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "lock.front_door",
    "state": "locked",
    "attributes": {
        "friendly_name": "Front Door",
        "supported_features": 0
    },
    "last_changed": "2023-04-18T18:26:55.211796+00:00",
    "last_updated": "2023-04-18T18:26:55.211796+00:00",
    "context": {
        "id": "01GYASX9KB1QPAYDNZ1SJMGKNR",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "lock.kitchen_door",
    "state": "unlocked",
    "attributes": {
        "friendly_name": "Kitchen Door",
        "supported_features": 0
    },
    "last_changed": "2023-04-18T18:26:55.211920+00:00",
    "last_updated": "2023-04-18T18:26:55.211920+00:00",
    "context": {
        "id": "01GYASX9KBYCWPXA2EWQ20Q2CK",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "lock.poorly_installed_door",
    "state": "unlocked",
    "attributes": {
        "friendly_name": "Poorly Installed Door",
        "supported_features": 0
    },
    "last_changed": "2023-04-18T18:26:55.211998+00:00",
    "last_updated": "2023-04-18T18:26:55.211998+00:00",
    "context": {
        "id": "01GYASX9KB4Q6RZ5K0Q81WT363",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "lock.openable_lock",
    "state": "locked",
    "attributes": {
        "friendly_name": "Openable Lock",
        "supported_features": 1
    },
    "last_changed": "2023-04-18T18:26:55.212053+00:00",
    "last_updated": "2023-04-18T18:26:55.212053+00:00",
    "context": {
        "id": "01GYASX9KCWHSHQWW1X0X5D426",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "number.volume",
    "state": "42.0",
    "attributes": {
        "min": 0.0,
        "max": 100.0,
        "step": 1.0,
        "mode": "slider",
        "icon": "mdi:volume-high",
        "friendly_name": "volume"
    },
    "last_changed": "2023-04-18T18:26:55.212516+00:00",
    "last_updated": "2023-04-18T18:26:55.212516+00:00",
    "context": {
        "id": "01GYASX9KCFP729W56DHPE828Y",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "number.pwm_1",
    "state": "0.42",
    "attributes": {
        "min": 0.0,
        "max": 1.0,
        "step": 0.01,
        "mode": "box",
        "icon": "mdi:square-wave",
        "friendly_name": "PWM 1"
    },
    "last_changed": "2023-04-18T18:26:55.212645+00:00",
    "last_updated": "2023-04-18T18:26:55.212645+00:00",
    "context": {
        "id": "01GYASX9KC4XWHKP2AJZQRR817",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "number.large_range",
    "state": "500",
    "attributes": {
        "min": 1,
        "max": 1000,
        "step": 1,
        "mode": "auto",
        "icon": "mdi:square-wave",
        "friendly_name": "Large Range"
    },
    "last_changed": "2023-04-18T18:26:55.212740+00:00",
    "last_updated": "2023-04-18T18:26:55.212740+00:00",
    "context": {
        "id": "01GYASX9KCRSX0G8XY1EQPRR00",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "number.small_range",
    "state": "128",
    "attributes": {
        "min": 1,
        "max": 255,
        "step": 1,
        "mode": "auto",
        "icon": "mdi:square-wave",
        "friendly_name": "Small Range"
    },
    "last_changed": "2023-04-18T18:26:55.212829+00:00",
    "last_updated": "2023-04-18T18:26:55.212829+00:00",
    "context": {
        "id": "01GYASX9KC90P81WF6C9PW0T34",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "number.temperature_setting",
    "state": "22",
    "attributes": {
        "min": 15.0,
        "max": 35.0,
        "step": 1,
        "mode": "box",
        "unit_of_measurement": "°C",
        "device_class": "temperature",
        "icon": "mdi:thermometer",
        "friendly_name": "Temperature setting"
    },
    "last_changed": "2023-04-18T18:26:55.212928+00:00",
    "last_updated": "2023-04-18T18:26:55.212928+00:00",
    "context": {
        "id": "01GYASX9KC9HQPH8YP18XSJCAZ",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "siren.siren",
    "state": "on",
    "attributes": {
        "friendly_name": "Siren",
        "supported_features": 3
    },
    "last_changed": "2023-04-18T18:26:55.213433+00:00",
    "last_updated": "2023-04-18T18:26:55.213433+00:00",
    "context": {
        "id": "01GYASX9KDPJ8WJV11G7AE45CG",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "siren.siren_with_all_features",
    "state": "on",
    "attributes": {
        "available_tones": ["fire", "alarm"],
        "friendly_name": "Siren with all features",
        "supported_features": 31
    },
    "last_changed": "2023-04-18T18:26:55.213515+00:00",
    "last_updated": "2023-04-18T18:26:55.213515+00:00",
    "context": {
        "id": "01GYASX9KD8QQJTA70KTW4JG39",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "select.speed",
    "state": "ridiculous_speed",
    "attributes": {
        "options": ["light_speed", "ridiculous_speed", "ludicrous_speed"],
        "icon": "mdi:speedometer",
        "friendly_name": "Speed"
    },
    "last_changed": "2023-04-18T18:26:55.213971+00:00",
    "last_updated": "2023-04-18T18:26:55.213971+00:00",
    "context": {
        "id": "01GYASX9KDENG03CA3W1D58P6Y",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "text.text",
    "state": "Hello world",
    "attributes": {
        "mode": "text",
        "min": 0,
        "max": 255,
        "pattern": null,
        "friendly_name": "Text"
    },
    "last_changed": "2023-04-18T18:26:55.218631+00:00",
    "last_updated": "2023-04-18T18:26:55.218631+00:00",
    "context": {
        "id": "01GYASX9KJCXV8P961E8W3JCZC",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "text.password",
    "state": "Hello world",
    "attributes": {
        "mode": "password",
        "min": 0,
        "max": 255,
        "pattern": null,
        "icon": "mdi:text",
        "friendly_name": "Password"
    },
    "last_changed": "2023-04-18T18:26:55.218748+00:00",
    "last_updated": "2023-04-18T18:26:55.218748+00:00",
    "context": {
        "id": "01GYASX9KJEZHK5A35KB65XTE1",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "text.text_with_1_to_5_characters",
    "state": "Hello",
    "attributes": {
        "mode": "text",
        "min": 1,
        "max": 5,
        "pattern": null,
        "icon": "mdi:text",
        "friendly_name": "Text with 1 to 5 characters"
    },
    "last_changed": "2023-04-18T18:26:55.218835+00:00",
    "last_updated": "2023-04-18T18:26:55.218835+00:00",
    "context": {
        "id": "01GYASX9KJ1D75FFMD9PGMNER0",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "text.text_with_only_lower_case_characters",
    "state": "world",
    "attributes": {
        "mode": "text",
        "min": 0,
        "max": 255,
        "pattern": "[a-z]+",
        "icon": "mdi:text",
        "friendly_name": "Text with only lower case characters"
    },
    "last_changed": "2023-04-18T18:26:55.219012+00:00",
    "last_updated": "2023-04-18T18:26:55.219012+00:00",
    "context": {
        "id": "01GYASX9KK5XAYKQ41ED4QT84F",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "vacuum.0_ground_floor",
    "state": "off",
    "attributes": {
        "fan_speed_list": ["min", "medium", "high", "max"],
        "battery_level": 100,
        "battery_icon": "mdi:battery-charging-100",
        "fan_speed": "medium",
        "status": "Charging",
        "cleaned_area": 0,
        "friendly_name": "0_Ground_floor",
        "supported_features": 2047
    },
    "last_changed": "2023-04-18T18:26:55.220170+00:00",
    "last_updated": "2023-04-18T18:26:55.220170+00:00",
    "context": {
        "id": "01GYASX9KMAG06DS90AHK5XJZY",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "vacuum.1_first_floor",
    "state": "off",
    "attributes": {
        "battery_level": 100,
        "battery_icon": "mdi:battery-charging-100",
        "status": "Charging",
        "cleaned_area": 0,
        "friendly_name": "1_First_floor",
        "supported_features": 219
    },
    "last_changed": "2023-04-18T18:26:55.220259+00:00",
    "last_updated": "2023-04-18T18:26:55.220259+00:00",
    "context": {
        "id": "01GYASX9KMDKA7CH1TXAGY02JS",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "vacuum.2_second_floor",
    "state": "off",
    "attributes": {
        "battery_level": 100,
        "battery_icon": "mdi:battery-charging-100",
        "status": "Charging",
        "cleaned_area": 0,
        "friendly_name": "2_Second_floor",
        "supported_features": 195
    },
    "last_changed": "2023-04-18T18:26:55.220328+00:00",
    "last_updated": "2023-04-18T18:26:55.220328+00:00",
    "context": {
        "id": "01GYASX9KM7AHZSSG3GDD6YH3Q",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "vacuum.3_third_floor",
    "state": "off",
    "attributes": {
        "cleaned_area": 0,
        "friendly_name": "3_Third_floor",
        "supported_features": 3
    },
    "last_changed": "2023-04-18T18:26:55.220579+00:00",
    "last_updated": "2023-04-18T18:26:55.220579+00:00",
    "context": {
        "id": "01GYASX9KMNSDPB4HKWN0WD440",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "vacuum.4_fourth_floor",
    "state": "off",
    "attributes": {
        "cleaned_area": 0,
        "friendly_name": "4_Fourth_floor",
        "supported_features": 0
    },
    "last_changed": "2023-04-18T18:26:55.220650+00:00",
    "last_updated": "2023-04-18T18:26:55.220650+00:00",
    "context": {
        "id": "01GYASX9KM36FE1FZSPZGKG6RZ",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "vacuum.5_fifth_floor",
    "state": "docked",
    "attributes": {
        "fan_speed_list": ["min", "medium", "high", "max"],
        "battery_level": 100,
        "battery_icon": "mdi:battery-charging-100",
        "fan_speed": "medium",
        "cleaned_area": 0,
        "friendly_name": "5_Fifth_floor",
        "supported_features": 13436
    },
    "last_changed": "2023-04-18T18:26:55.220733+00:00",
    "last_updated": "2023-04-18T18:26:55.220733+00:00",
    "context": {
        "id": "01GYASX9KM195NHCMVTQ2QCA0M",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "water_heater.demo_water_heater",
    "state": "eco",
    "attributes": {
        "min_temp": 43.3,
        "max_temp": 60.0,
        "operation_list": ["eco", "electric", "performance", "high_demand", "heat_pump", "gas", "off"],
        "current_temperature": null,
        "temperature": 48.3,
        "target_temp_high": null,
        "target_temp_low": null,
        "operation_mode": "eco",
        "away_mode": "off",
        "friendly_name": "Demo Water Heater",
        "supported_features": 7
    },
    "last_changed": "2023-04-18T18:26:55.221680+00:00",
    "last_updated": "2023-04-18T18:26:55.221680+00:00",
    "context": {
        "id": "01GYASX9KNJE39P2ZT8BMMMX3Y",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "water_heater.demo_water_heater_celsius",
    "state": "eco",
    "attributes": {
        "min_temp": 43.3,
        "max_temp": 60.0,
        "operation_list": ["eco", "electric", "performance", "high_demand", "heat_pump", "gas", "off"],
        "current_temperature": null,
        "temperature": 45,
        "target_temp_high": null,
        "target_temp_low": null,
        "operation_mode": "eco",
        "away_mode": "on",
        "friendly_name": "Demo Water Heater Celsius",
        "supported_features": 7
    },
    "last_changed": "2023-04-18T18:26:55.221791+00:00",
    "last_updated": "2023-04-18T18:26:55.221791+00:00",
    "context": {
        "id": "01GYASX9KNHR4XWBGSMY7HWRDS",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "update.demo_update_no_install",
    "state": "on",
    "attributes": {
        "auto_update": false,
        "installed_version": "1.0.0",
        "in_progress": false,
        "latest_version": "1.0.1",
        "release_summary": "Awesome update, fixing everything!",
        "release_url": "https://www.example.com/release/1.0.1",
        "skipped_version": null,
        "title": "Awesomesoft Inc.",
        "entity_picture": "https://brands.home-assistant.io/_/demo/icon.png",
        "friendly_name": "Demo Update No Install",
        "supported_features": 0
    },
    "last_changed": "2023-04-18T18:26:55.222186+00:00",
    "last_updated": "2023-04-18T18:26:55.222186+00:00",
    "context": {
        "id": "01GYASX9KPSWMGV0988WY4RWZJ",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "update.demo_no_update",
    "state": "off",
    "attributes": {
        "auto_update": false,
        "installed_version": "1.0.0",
        "in_progress": false,
        "latest_version": "1.0.0",
        "release_summary": null,
        "release_url": null,
        "skipped_version": null,
        "title": "AdGuard Home",
        "entity_picture": "https://brands.home-assistant.io/_/demo/icon.png",
        "friendly_name": "Demo No Update",
        "supported_features": 11
    },
    "last_changed": "2023-04-18T18:26:55.222242+00:00",
    "last_updated": "2023-04-18T18:26:55.222242+00:00",
    "context": {
        "id": "01GYASX9KPRN290SXH7KR7F3C0",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "update.demo_add_on",
    "state": "on",
    "attributes": {
        "auto_update": false,
        "installed_version": "1.0.0",
        "in_progress": false,
        "latest_version": "1.0.1",
        "release_summary": "Awesome update, fixing everything!",
        "release_url": "https://www.example.com/release/1.0.1",
        "skipped_version": null,
        "title": "AdGuard Home",
        "entity_picture": "https://brands.home-assistant.io/_/demo/icon.png",
        "friendly_name": "Demo add-on",
        "supported_features": 11
    },
    "last_changed": "2023-04-18T18:26:55.222346+00:00",
    "last_updated": "2023-04-18T18:26:55.222346+00:00",
    "context": {
        "id": "01GYASX9KP1FGTVKTA3WZJ6M57",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "update.demo_living_room_bulb_update",
    "state": "on",
    "attributes": {
        "auto_update": false,
        "installed_version": "1.93.3",
        "in_progress": false,
        "latest_version": "1.94.2",
        "release_summary": "Added support for effects",
        "release_url": "https://www.example.com/release/1.93.3",
        "skipped_version": null,
        "title": "Philips Lamps Firmware",
        "device_class": "firmware",
        "entity_picture": "https://brands.home-assistant.io/_/demo/icon.png",
        "friendly_name": "Demo Living Room Bulb Update",
        "supported_features": 11
    },
    "last_changed": "2023-04-18T18:26:55.222455+00:00",
    "last_updated": "2023-04-18T18:26:55.222455+00:00",
    "context": {
        "id": "01GYASX9KPX4HHFCFFN1MS6YEB",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "update.demo_update_with_progress",
    "state": "on",
    "attributes": {
        "auto_update": false,
        "installed_version": "1.93.3",
        "in_progress": false,
        "latest_version": "1.94.2",
        "release_summary": "Added support for effects",
        "release_url": "https://www.example.com/release/1.93.3",
        "skipped_version": null,
        "title": "Philips Lamps Firmware",
        "device_class": "firmware",
        "entity_picture": "https://brands.home-assistant.io/_/demo/icon.png",
        "friendly_name": "Demo Update with Progress",
        "supported_features": 31
    },
    "last_changed": "2023-04-18T18:26:55.222554+00:00",
    "last_updated": "2023-04-18T18:26:55.222554+00:00",
    "context": {
        "id": "01GYASX9KP20NJAENTRYW6MHXX",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "calendar.calendar_1",
    "state": "off",
    "attributes": {
        "message": "Future Event",
        "all_day": false,
        "start_time": "2023-04-18 21:56:55",
        "end_time": "2023-04-18 22:56:55",
        "location": "Future Location",
        "description": "Future Description",
        "friendly_name": "Calendar 1"
    },
    "last_changed": "2023-04-18T19:56:55.299202+00:00",
    "last_updated": "2023-04-18T19:56:55.299202+00:00",
    "context": {
        "id": "01GYAZ2343SJSGAVJ2AC0PXTYC",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "calendar.calendar_2",
    "state": "off",
    "attributes": {
        "message": "Current Event",
        "all_day": false,
        "start_time": "2023-04-18 20:56:55",
        "end_time": "2023-04-18 21:56:55",
        "location": "",
        "description": "",
        "friendly_name": "Calendar 2"
    },
    "last_changed": "2023-04-18T18:56:55.250330+00:00",
    "last_updated": "2023-04-18T18:56:55.250330+00:00",
    "context": {
        "id": "01GYAVM7EJW1TNVR1YSVJXZG2W",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "weather.forecast_home_assistant",
    "state": "cloudy",
    "attributes": {
        "temperature": 11.9,
        "temperature_unit": "°C",
        "humidity": 56,
        "pressure": 1011.1,
        "pressure_unit": "hPa",
        "wind_bearing": 77.9,
        "wind_speed": 24.5,
        "wind_speed_unit": "km/h",
        "visibility_unit": "km",
        "precipitation_unit": "mm",
        "forecast": [{
            "condition": "cloudy",
            "datetime": "2023-04-21T09:00:00+00:00",
            "wind_bearing": 67.8,
            "temperature": 9.7,
            "templow": 5.9,
            "wind_speed": 23.4,
            "precipitation": 0.5
        }, {
            "condition": "rainy",
            "datetime": "2023-04-22T09:00:00+00:00",
            "wind_bearing": 35.2,
            "temperature": 12.9,
            "templow": 5.2,
            "wind_speed": 20.2,
            "precipitation": 2.6
        }, {
            "condition": "cloudy",
            "datetime": "2023-04-23T09:00:00+00:00",
            "wind_bearing": 132.4,
            "temperature": 14.7,
            "templow": 4.0,
            "wind_speed": 9.0,
            "precipitation": 0.2
        }, {
            "condition": "rainy",
            "datetime": "2023-04-24T09:00:00+00:00",
            "wind_bearing": 109.9,
            "temperature": 15.8,
            "templow": 7.0,
            "wind_speed": 12.2,
            "precipitation": 0.9
        }, {
            "condition": "partlycloudy",
            "datetime": "2023-04-25T09:00:00+00:00",
            "wind_bearing": 128.9,
            "temperature": 14.1,
            "templow": 6.4,
            "wind_speed": 13.0,
            "precipitation": 1.6
        }],
        "attribution": "Weather forecast from met.no, delivered by the Norwegian Meteorological Institute.",
        "friendly_name": "Forecast Home Assistant"
    },
    "last_changed": "2023-04-20T01:14:55.529148+00:00",
    "last_updated": "2023-04-20T08:42:55.463407+00:00",
    "context": {
        "id": "01GYEX9D37K7GSGMY227Q2GKZH",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "light.bed_light",
    "state": "on",
    "attributes": {
        "min_color_temp_kelvin": 2000,
        "max_color_temp_kelvin": 6535,
        "min_mireds": 153,
        "max_mireds": 500,
        "effect_list": ["rainbow", "none"],
        "supported_color_modes": ["color_temp", "hs"],
        "color_mode": "color_temp",
        "brightness": 180,
        "color_temp_kelvin": 4166,
        "color_temp": 240,
        "hs_color": [26.752, 31.945],
        "rgb_color": [255, 209, 173],
        "xy_color": [0.411, 0.362],
        "effect": "rainbow",
        "friendly_name": "Bed Light",
        "supported_features": 4
    },
    "last_changed": "2023-04-19T12:53:22.494139+00:00",
    "last_updated": "2023-04-19T12:53:22.494139+00:00",
    "context": {
        "id": "01GYCS78XW1XQGX6G628V5ET46",
        "parent_id": null,
        "user_id": "e49eb0d1722b46189ea623d7bf9b8046"
    }
}, {
    "entity_id": "light.ceiling_lights",
    "state": "on",
    "attributes": {
        "min_color_temp_kelvin": 2000,
        "max_color_temp_kelvin": 6535,
        "min_mireds": 153,
        "max_mireds": 500,
        "supported_color_modes": ["color_temp", "hs"],
        "color_mode": "color_temp",
        "brightness": 180,
        "color_temp_kelvin": 2631,
        "color_temp": 380,
        "hs_color": [28.55, 67.974],
        "rgb_color": [255, 164, 81],
        "xy_color": [0.533, 0.389],
        "friendly_name": "Ceiling Lights",
        "supported_features": 0
    },
    "last_changed": "2023-04-19T12:53:22.494343+00:00",
    "last_updated": "2023-04-19T12:53:22.494343+00:00",
    "context": {
        "id": "01GYCS78XW1XQGX6G628V5ET46",
        "parent_id": null,
        "user_id": "e49eb0d1722b46189ea623d7bf9b8046"
    }
}, {
    "entity_id": "light.kitchen_lights",
    "state": "on",
    "attributes": {
        "min_color_temp_kelvin": 2000,
        "max_color_temp_kelvin": 6535,
        "min_mireds": 153,
        "max_mireds": 500,
        "supported_color_modes": ["color_temp", "hs"],
        "color_mode": "hs",
        "brightness": 180,
        "hs_color": [345, 75],
        "rgb_color": [255, 63, 111],
        "xy_color": [0.59, 0.274],
        "friendly_name": "Kitchen Lights",
        "supported_features": 0
    },
    "last_changed": "2023-04-19T12:53:22.494454+00:00",
    "last_updated": "2023-04-19T12:53:22.494454+00:00",
    "context": {
        "id": "01GYCS78XW1XQGX6G628V5ET46",
        "parent_id": null,
        "user_id": "e49eb0d1722b46189ea623d7bf9b8046"
    }
}, {
    "entity_id": "light.office_rgbw_lights",
    "state": "on",
    "attributes": {
        "supported_color_modes": ["rgbw"],
        "color_mode": "rgbw",
        "brightness": 180,
        "hs_color": [0.0, 49.804],
        "rgb_color": [255, 128, 128],
        "rgbw_color": [255, 0, 0, 255],
        "xy_color": [0.524, 0.313],
        "friendly_name": "Office RGBW Lights",
        "supported_features": 0
    },
    "last_changed": "2023-04-19T12:53:22.494569+00:00",
    "last_updated": "2023-04-19T12:53:22.494569+00:00",
    "context": {
        "id": "01GYCS78XW1XQGX6G628V5ET46",
        "parent_id": null,
        "user_id": "e49eb0d1722b46189ea623d7bf9b8046"
    }
}, {
    "entity_id": "light.living_room_rgbww_lights",
    "state": "on",
    "attributes": {
        "supported_color_modes": ["rgbww"],
        "color_mode": "rgbww",
        "brightness": 180,
        "hs_color": [0.923, 50.98],
        "rgb_color": [255, 127, 125],
        "rgbww_color": [255, 0, 0, 255, 0],
        "xy_color": [0.528, 0.315],
        "friendly_name": "Living Room RGBWW Lights",
        "supported_features": 0
    },
    "last_changed": "2023-04-19T12:53:22.494682+00:00",
    "last_updated": "2023-04-19T12:53:22.494682+00:00",
    "context": {
        "id": "01GYCS78XW1XQGX6G628V5ET46",
        "parent_id": null,
        "user_id": "e49eb0d1722b46189ea623d7bf9b8046"
    }
}, {
    "entity_id": "light.entrance_color_white_lights",
    "state": "on",
    "attributes": {
        "supported_color_modes": ["hs", "white"],
        "color_mode": "hs",
        "brightness": 180,
        "hs_color": [345, 75],
        "rgb_color": [255, 63, 111],
        "xy_color": [0.59, 0.274],
        "friendly_name": "Entrance Color + White Lights",
        "supported_features": 0
    },
    "last_changed": "2023-04-19T12:53:22.494772+00:00",
    "last_updated": "2023-04-19T12:53:22.494772+00:00",
    "context": {
        "id": "01GYCS78XW1XQGX6G628V5ET46",
        "parent_id": null,
        "user_id": "e49eb0d1722b46189ea623d7bf9b8046"
    }
}, {
    "entity_id": "switch.decorative_lights",
    "state": "on",
    "attributes": {
        "assumed_state": true,
        "friendly_name": "Decorative Lights"
    },
    "last_changed": "2023-04-18T18:26:55.226666+00:00",
    "last_updated": "2023-04-18T18:26:55.226666+00:00",
    "context": {
        "id": "01GYASX9KTQ8SS658A1EZ4TBCC",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "switch.ac",
    "state": "off",
    "attributes": {
        "device_class": "outlet",
        "icon": "mdi:air-conditioner",
        "friendly_name": "AC"
    },
    "last_changed": "2023-04-18T18:26:55.226764+00:00",
    "last_updated": "2023-04-18T18:26:55.226764+00:00",
    "context": {
        "id": "01GYASX9KT4MJ68MZK54E7XB20",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "image_processing.demo_face",
    "state": "Hans",
    "attributes": {
        "faces": [{
            "confidence": 98.34,
            "name": "Hans",
            "age": 16.0,
            "gender": "male",
            "entity_id": "image_processing.demo_face"
        }, {
            "name": "Helena",
            "age": 28.0,
            "gender": "female",
            "entity_id": "image_processing.demo_face"
        }, {
            "confidence": 62.53,
            "name": "Luna"
        }],
        "total_faces": 4,
        "device_class": "face",
        "friendly_name": "Demo Face"
    },
    "last_changed": "2023-04-18T18:27:05.231315+00:00",
    "last_updated": "2023-04-18T18:27:05.231315+00:00",
    "context": {
        "id": "01GYASXKCF7KGSX3RY5T84MT4Y",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.total_energy_kwh_cost",
    "state": "207.025",
    "attributes": {
        "state_class": "total",
        "last_reset": "2023-04-19T13:16:13.676115+00:00",
        "unit_of_measurement": "UAH",
        "device_class": "monetary",
        "friendly_name": "Total energy 1 Cost"
    },
    "last_changed": "2023-04-20T09:36:55.621815+00:00",
    "last_updated": "2023-04-20T09:36:55.621815+00:00",
    "context": {
        "id": "01GYF0C9A5SE568H2H2MG017M7",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.energy_production_today",
    "state": "1.395",
    "attributes": {
        "unit_of_measurement": "kWh",
        "device_class": "energy",
        "friendly_name": "Solar production forecast Estimated energy production - today"
    },
    "last_changed": "2023-04-20T09:17:41.527035+00:00",
    "last_updated": "2023-04-20T09:17:41.527035+00:00",
    "context": {
        "id": "01GYEZ928QR6A84B85NNRDAXRC",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.energy_production_tomorrow",
    "state": "0.885",
    "attributes": {
        "unit_of_measurement": "kWh",
        "device_class": "energy",
        "friendly_name": "Solar production forecast Estimated energy production - tomorrow"
    },
    "last_changed": "2023-04-20T09:17:41.527161+00:00",
    "last_updated": "2023-04-20T09:17:41.527161+00:00",
    "context": {
        "id": "01GYEZ928Q2ZAWYS19QWKRDRPP",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.power_highest_peak_time_today",
    "state": "2023-04-20T05:00:00+00:00",
    "attributes": {
        "device_class": "timestamp",
        "friendly_name": "Solar production forecast Highest power peak time - today"
    },
    "last_changed": "2023-04-20T09:17:41.527230+00:00",
    "last_updated": "2023-04-20T09:17:41.527230+00:00",
    "context": {
        "id": "01GYEZ928QAT0KM3SWJ4T7NN3S",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.power_highest_peak_time_tomorrow",
    "state": "2023-04-20T07:00:00+00:00",
    "attributes": {
        "device_class": "timestamp",
        "friendly_name": "Solar production forecast Highest power peak time - tomorrow"
    },
    "last_changed": "2023-04-20T09:17:41.527285+00:00",
    "last_updated": "2023-04-20T09:17:41.527285+00:00",
    "context": {
        "id": "01GYEZ928QDDDSH1ZBSB6CGNS0",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.power_production_now",
    "state": "103",
    "attributes": {
        "state_class": "measurement",
        "unit_of_measurement": "W",
        "device_class": "power",
        "friendly_name": "Solar production forecast Estimated power production - now"
    },
    "last_changed": "2023-04-20T09:17:41.527340+00:00",
    "last_updated": "2023-04-20T09:17:41.527340+00:00",
    "context": {
        "id": "01GYEZ928Q3YKB56RFGWVNXEW4",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.energy_current_hour",
    "state": "0.106",
    "attributes": {
        "unit_of_measurement": "kWh",
        "device_class": "energy",
        "friendly_name": "Solar production forecast Estimated energy production - this hour"
    },
    "last_changed": "2023-04-20T09:17:41.527387+00:00",
    "last_updated": "2023-04-20T09:17:41.527387+00:00",
    "context": {
        "id": "01GYEZ928Q5E59Z34F563SR367",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.energy_next_hour",
    "state": "0.121",
    "attributes": {
        "unit_of_measurement": "kWh",
        "device_class": "energy",
        "friendly_name": "Solar production forecast Estimated energy production - next hour"
    },
    "last_changed": "2023-04-20T09:17:41.527439+00:00",
    "last_updated": "2023-04-20T09:17:41.527439+00:00",
    "context": {
        "id": "01GYEZ928QRDFFB1W3G00Y4SA3",
        "parent_id": null,
        "user_id": null
    }
}, {
    "entity_id": "sensor.total_gas_m3_cost",
    "state": "48.7390000000002",
    "attributes": {
        "state_class": "total",
        "last_reset": "2023-04-19T13:19:04.088604+00:00",
        "unit_of_measurement": "UAH",
        "device_class": "monetary",
        "friendly_name": "Total gas 1 Cost"
    },
    "last_changed": "2023-04-20T09:36:55.621875+00:00",
    "last_updated": "2023-04-20T09:36:55.621875+00:00",
    "context": {
        "id": "01GYF0C9A5J4N2FQZAAD5YZ5VQ",
        "parent_id": null,
        "user_id": null
    }
}];
export default data;