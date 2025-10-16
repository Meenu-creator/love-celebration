(function () {
            // languages list (display). keep codes in sync with translations keys when available.
            const languages = [
                { code: "en", name: "English" },
                 { code: "ur", name: "Urdu" }, 
                 { code: "es", name: "Spanish" },
                { code: "fr", name: "French" },
                 { code: "ar", name: "Arabic" }, 
                 { code: "fa", name: "Persian" },
                { code: "tr", name: "Turkish" },
                 { code: "de", name: "German" },
                  { code: "hi", name: "Hindi" },
                { code: "zh-CN", name: "Chinese (Simplified)" },
                 { code: "ja", name: "Japanese" }, 
                 { code: "ru", name: "Russian" },
               { code: "hi", name: "Hindi" },
                { code: "zh-CN", name: "Chinese (Simplified)" },
                { code: "ja", name: "Japanese" },
                { code: "ru", name: "Russian" },
            ];

            // translations: HTML strings. Add or extend translations here.
            const translations = {
                "en": `
                    <h2>Happy Birthday to the most incredible woman I have ever known! 🎂🎉🎁</h2>
                    <p>From the moment you came into my life, you have been my sunshine on a cloudy day ☀️, my calm in the middle of a storm 🌸, and the brightest light in the story of my heart ✨. Today, on October 17th, we celebrate the day the world was blessed with your beautiful soul 🎉🎂🎈.</p>
                    <p>You are not just my wife; you are my best friend, my greatest supporter, my partner-in-crime, and my forever love ❤️. Every laugh we share is a treasure 😂🏆, every memory we make is a priceless gift 🎁, and every single day by your side feels like a beautiful adventure filled with joy and wonder 🌍🚀.</p>
                    <p>Thank you for your endless love and patience 💖, for your incredible strength and kindness 💪🌷, and for the way you turn ordinary moments into magical ones ✨. I love your smile, your gentle heart, and the way you make our house a warm, happy home 🏡🔥.</p>
                    <p>On this special day I promise to make you feel cherished, to laugh with you, support your dreams, hold your hand through every challenge, and celebrate every victory — big or small 🥂🌟. May this year bring you abundant happiness, new memories, and all the love you deserve 💐🌈.</p>
                    <p><strong>With all my love, now and forever, your adoring husband 💍🤵👰💕</strong></p>
                `,
                "ur": `
                    <div dir="rtl" style="text-align:right;">
                        <h2>میری پیاری بیوی کو سالگرہ مبارک ہو! 🎂🎉🎁</h2>
                        <p>جب سے تم میری زندگی میں آئیں، تم نے ہر اداس دن کو روشن کر دیا ☀️، ہر طوفان میں سکون بخشی 🌸، اور میرے دل کی کہانی میں سب سے روشن روشنی بن گئیں ✨۔ آج، 17 اکتوبر کو، ہم اس دن کا جشن منا رہے ہیں جب دنیا کو تم جیسی خوبصورت روح نصیب ہوئی 🎉🎈。</p>
                        <p>تم صرف میری بیوی نہیں؛ تم میری بہترین دوست، میری سب سے بڑی حمایت، میری ہر مہم میں ساتھی، اور میری ہمیشہ کی محبت ہو ❤️۔ ہر ہنسی جو ہم بانٹتے ہیں وہ ایک خزانہ ہے 😂🏆، ہر یاد ایک انمول تحفہ ہے 🎁، اور تمہارے ساتھ ہر دن ایک حسین سفر ہے 🌍🚀。</p>
                        <p>تمہاری بےپناہ محبت اور صبر کے لیے شکریہ 💖، تمہاری حیرت انگیز قوت اور مہربانی کے لیے شکریہ 💪🌷، اور معمولی لمحات کو جادو بنا دینے کے لیے شکریہ ✨۔ میں تمہاری مسکراہٹ، نرم دل اور ہمارے گھر کو گھر بنانے کے طریقے سے بے حد محبت کرتا ہوں 🏡🔥。</p>
                        <p>اس خاص دن میں وعدہ کرتا ہوں کہ ہمیشہ تمہیں عزیز رکھوں گا، تمہارے ساتھ ہنسوں گا، تمھارے خوابوں کی حمایت کروں گا، ہر چیلنج میں تمہارا ہاتھ تھاموں گا، اور ہر فتح کا جشن مناؤں گا 🥂🌟۔ اللہ کرے یہ سال تمھیں خوشیوں، نئی یادوں اور بے پایاں محبت سے بھر دے 💐🌈。</p>
                        <p style="text-align:left; direction:ltr;"><strong>تمام میری محبت کے ساتھ، ہمیشہ اور ہمیشہ کے لیے، تمہارا پیار کرنے والا شوہر 💍🤵👰💕</strong></p>
                    </div>
                `,
                "fr": `
                    <h2>Joyeux Anniversaire à la femme la plus incroyable que je connaisse ! 🎂🎉🎁</h2>
                    <p>Depuis le moment où tu es entrée dans ma vie, tu as été le soleil de mes journées nuageuses ☀️, la paix au cœur de mes tempêtes 🌸, et la plus belle lumière dans l'histoire de mon cœur ✨. Aujourd'hui, le 17 octobre, nous célébrons le jour où le monde a été béni par ton âme magnifique 🎉🎈.</p>
                    <p>Tu n'es pas seulement ma femme ; tu es ma meilleure amie, ma plus grande supportrice, ma complice, et mon amour éternel ❤️. Chaque rire partagé est un trésor 😂🏆, chaque souvenir un cadeau précieux 🎁, et chaque jour à tes côtés une belle aventure 🌍🚀.</p>
                    <p>Merci pour ton amour infini et ta patience 💖, pour ta force et ta bonté 💪🌷, et pour la façon dont tu rends les moments ordinaires magiques ✨. J'aime ton sourire, ton cœur tendre, et la chaleur que tu apportes à notre maison 🏡🔥.</p>
                    <p>En ce jour spécial je promets de te chérir, de rire avec toi, de soutenir tes rêves, de tenir ta main à travers chaque épreuve, et de célébrer chaque victoire 🥂🌟. Que cette année t'apporte bonheur, de nouveaux souvenirs, et tout l'amour que tu mérites 💐🌈.</p>
                    <p><strong>Avec tout mon amour, pour toujours, ton mari dévoué 💍🤵👰💕</strong></p>
                `,
                "ar": `
                    <div dir="rtl" style="text-align:right;">
                        <h2>عيد ميلاد سعيد لأجمل امرأة في حياتي! 🎂🎉🎁</h2>
                        <p>منذ أن دخلت حياتي وأنتِ شمسي في الأيام الغائمة ☀️، وراحتي في وسط العواصف 🌸، وأجمل نور في قصة قلبي ✨. اليوم، 17 أكتوبر، نحتفل بيوم قدومك الذي أضاء العالم 🎉🎈.</p>
                        <p>أنتِ ليستِ زوجتي فقط؛ أنتِ أعز صديقة، وأكبر داعم، وشريكة في كل مغامرة، وحب حياتي الأبدي ❤️. كل ضحكة نشاركها كنز 😂🏆، وكل ذكرى نصنعها هدية ثمينة 🎁، وكل يوم بقربك مغامرة جميلة 🌍🚀.</p>
                        <p>شكراً لحبك وصبرك 💖، لقوتك وللطفك 💪🌷، ولتحويلك اللحظات العادية إلى لحظات سحرية ✨. أحب ابتسامتك وقلبك الطيب والطريقة التي تجعلين بها منزلنا بيتاً دافئاً 🏡🔥.</p>
                        <p>في هذا اليوم الخاص أعدك أن أكون دوماً بجانبك، أضحك معك، أدعم أحلامك، أمسك بيدك في كل تحدٍ، وأحتفل معك بكل نصر 🥂🌟. عسى أن يحمل لك هذا العام سعادة وذكريات جديدة وكل الحب الذي تستحقينه 💐🌈.</p>
                        <p style="text-align:left; direction:ltr;"><strong>مع كل حبي، الآن وإلى الأبد، زوجك المحب 💍🤵👰💕</strong></p>
                    </div>
                `,
                "tr": `
                    <h2>Hayatımın en muhteşem kadınına mutlu yıllar! 🎂🎉🎁</h2>
                    <p>Hayatıma girdiğin andan itibaren, bulutlu günlerimin güneşi oldun ☀️, fırtınalarımın içindeki huzur 🌸 ve kalbimin hikâyesindeki en parlak ışık oldun ✨. Bugün, 17 Ekim'de, senin varlığını kutluyoruz 🎉🎈.</p>
                    <p>Sadece eşim değilsin; en iyi arkadaşım, en büyük destekçim, maceralarımın ortağı ve sonsuz aşkımsın ❤️. Paylaştığımız her kahkaha bir hazine 😂🏆, yarattığımız her anı paha biçilemez bir hediye 🎁, ve her gün seninle harika bir macera 🌍🚀.</p>
                    <p>Bitmeyen sevgin, sabrın, gücün ve nezaketin için teşekkür ederim 💖💪🌷. Sıcacık gülüşün, yumuşak kalbin ve evimizi sıcak bir yuvaya dönüştürüşün için minnettarım 🏡🔥.</p>
                    <p>Bu özel günde seni değerli hissettireceğime, seninle güleceğime, hayallerini destekleyeceğime, her zorlukta elini tutacağıma ve her zaferi kutlayacağıma söz veriyorum 🥂🌟. Bu yıl sana mutlu, yeni anılarla dolu ve hak ettiğin tüm aşkı getirsin 💐🌈.</p>
                    <p><strong>Tüm sevgimle, şimdi ve daima, sevgi dolu kocan 💍🤵👰💕</strong></p>
                `,
                "hi": `
                    <h2>मेरी जीवन की सबसे अद्भुत महिला को जन्मदिन की हार्दिक शुभकामनाएं! 🎂🎉🎁</h2>
                    <p>जब से आप मेरी जिंदगी में आई हैं, आप बादल वाले दिन में मेरा सूरज ☀️, तूफान के बीच मेरी शांति 🌸, और मेरे दिल की कहानी में सबसे चमकता हुआ प्रकाश रही हैं ✨। आज, 17 अक्टूबर को, हम उस दिन का जश्न मना रहे हैं जब दुनिया को आपकी खूबसूरत आत्मा का आशीर्वाद मिला 🎉🎈।</p>
                    <p>आप सिर्फ मेरी पत्नी नहीं हैं; आप मेरी सबसे अच्छी दोस्त, मेरी सबसे बड़ी समर्थक, मेरी हर शरारत में साथी, और मेरा हमेशा का प्यार हैं ❤️। हर हंसी जो हम साझा करते हैं वह एक खजाना है 😂🏆, हर यादें जो हम बनाते हैं वह अनमोल उपहार है 🎁, और आपके साथ का हर दिन खुशी और आश्चर्य से भरी एक सुंदर यात्रा है 🌍🚀।</p>
                    <p>आपके अनंत प्यार और धैर्य के लिए धन्यवाद 💖, आपकी अविश्वसनीय ताकत और दयालुता के लिए 💪🌷, और साधारण पलों को जादुई बनाने के लिए ✨। मैं आपकी मुस्कान, आपका कोमल दिल, और जिस तरह से आप हमारे घर को गर्म, खुशहाल घर बनाती हैं, उससे प्यार करता हूं 🏡🔥।</p>
                    <p><strong>सारे प्यार के साथ, अब और हमेशा के लिए, आपका प्यार करने वाला पति 💍🤵👰💕</strong></p>
                `,
                "zh-CN": `
                    <h2>祝我一生中最不可思议的女人生日快乐！🎂🎉🎁</h2>
                    <p>自从你走进我的生活，你就成为了我阴天里的太阳 ☀️，我暴风雨中的宁静 🌸，我心灵故事中最闪耀的光芒 ✨。今天，10月17日，我们庆祝这个世界因你的美丽灵魂而被祝福的日子 🎉🎈。</p>
                    <p>你不仅是我的妻子；你是我最好的朋友，我最大的支持者，我的搭档，我永远的爱 ❤️。我们分享的每一个笑声都是珍宝 😂🏆，我们创造的每一个回忆都是无价的礼物 🎁，与你在一起的每一天都是充满欢乐和惊喜的美好冒险 🌍🚀。</p>
                    <p>感谢你无尽的爱与耐心 💖，感谢你令人难以置信的力量与善良 💪🌷，感谢你把平凡时刻变成神奇 ✨。我爱你的微笑，你温柔的心，以及你让我们的房子变成温暖幸福的家的方式 🏡🔥。</p>
                    <p><strong>永远爱你，此时此刻直到永远，你深爱的丈夫 💍🤵👰💕</strong></p>
                `,
                "ja": `
                    <h2>私の人生で最も素晴らしい女性へ、お誕生日おめでとう！🎂🎉🎁</h2>
                    <p>あなたが私の人生に入ってきた時から、あなたは曇り空の太陽 ☀️、嵐の中の静けさ 🌸、そして私の心の物語の中で最も輝く光となってきました ✨。今日、10月17日、私たちはあなたの美しい魂が世界に授かった日を祝います 🎉🎈。</p>
                    <p>あなたは私の妻というだけでなく、親友であり、最大の支援者であり、相棒であり、永遠の愛です ❤️。私たちが共有する笑い声は宝物であり 😂🏆、作り出す思い出は無価の贈り物 🎁、そしてあなたと過ごす毎日が喜びと驚きに満ちた美しい冒険です 🌍🚀。</p>
                    <p>あなたの尽きることのない愛と忍耐に感謝します 💖、信じられないほどの強さと優しさに感謝します 💪🌷、そして普通の瞬間を魔法のような瞬間に変えてくれることに感謝します ✨。私はあなたの笑顔、優しい心、そして私たちの家を温かく幸せな家庭にする方法が大好きです 🏡🔥。</p>
                    <p><strong>すべての愛を込めて、今そしてこれからも、愛する夫より 💍🤵👰💕</strong></p>
                `,
                "ru": `
                    <h2>С днем рождения, самая удивительная женщина в моей жизни! 🎂🎉🎁</h2>
                    <p>С того момента, как ты вошла в мою жизнь, ты стала моим солнцем в пасмурный день ☀️, моим спокойствием посреди бури 🌸, и самым ярким светом в истории моего сердца ✨. Сегодня, 17 октября, мы празднуем день, когда мир был благословлен твоей прекрасной душой 🎉🎈.</p>
                    <p>Ты не просто моя жена; ты мой лучший друг, моя величайшая поддержка, мой партнер во всех приключениях и моя вечная любовь ❤️. Каждый наш общий смех - это сокровище 😂🏆, каждое воспоминание - бесценный подарок 🎁, и каждый день рядом с тобой - это прекрасное приключение, полное радости и удивления 🌍🚀.</p>
                    <p>Спасибо за твою бесконечную любовь и терпение 💖, за твою невероятную силу и доброту 💪🌷, и за то, как ты превращаешь обычные моменты в волшебные ✨. Я люблю твою улыбку, твое нежное сердце и то, как ты делаешь наш дом теплым и счастливым 🏡🔥.</p>
                    <p><strong>Со всей моей любовью, сейчас и навсегда, твой любящий муж 💍🤵👰💕</strong></p>
                `
                // add more translations keyed by language code as desired
            };

            const selector = document.getElementById('languageSelector');
            const wishDisplay = document.getElementById('wishDisplay');

            // Helper to set content and direction
            function showTranslation(code) {
                const html = translations[code] || translations['en'];
                wishDisplay.innerHTML = html;
                // set direction based on code
                if (code === 'ar' || code === 'ur' || code === 'fa') {
                    wishDisplay.setAttribute('dir', 'rtl');
                    wishDisplay.style.textAlign = 'right';
                } else {
                    wishDisplay.setAttribute('dir', 'ltr');
                    wishDisplay.style.textAlign = 'left';
                }
            }

            // create language buttons
            languages.forEach(lang => {
                const btn = document.createElement('button');
                btn.className = 'language-btn';
                btn.type = 'button';
                btn.dataset.code = lang.code;
                btn.innerText = lang.name;
                btn.addEventListener('click', () => {
                    // set active class
                    document.querySelectorAll('.language-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    showTranslation(lang.code);
                });
                selector.appendChild(btn);
            });

            // initial show english
            showTranslation('en');
            // mark English button active (first match)
            const firstEnglishBtn = Array.from(document.querySelectorAll('.language-btn')).find(b => b.dataset.code === 'en');
            if (firstEnglishBtn) firstEnglishBtn.classList.add('active');

            // copy current displayed wish
            document.getElementById('copyWish').addEventListener('click', async () => {
                try {
                    const text = wishDisplay.innerText;
                    await navigator.clipboard.writeText(text);
                    const btn = document.getElementById('copyWish');
                    btn.innerText = 'Copied';
                    setTimeout(() => btn.innerText = 'Copy Current Wish', 1500);
                } catch (e) {
                    console.error(e);
                }
            });

            // show English button (useful to restore)
            document.getElementById('showEnglish').addEventListener('click', () => {
                document.querySelectorAll('.language-btn').forEach(b => b.classList.remove('active'));
                if (firstEnglishBtn) firstEnglishBtn.classList.add('active');
                showTranslation('en');
            });

            // close intro overlay
            document.getElementById('closeIntro').addEventListener('click', () => {
                const intro = document.getElementById('celebration');
                intro.style.opacity = '0';
                setTimeout(() => intro.style.display = 'none', 600);
            });
        })();

        // Add this to your existing script
        function typeText(element, text, speed = 100) {
            return new Promise(resolve => {
                let i = 0;
                element.innerHTML = ''; // Clear existing content
                
                // Create cursor element
                const cursor = document.createElement('span');
                cursor.className = 'typing-cursor';
                element.appendChild(cursor);
                
                function type() {
                    if (i < text.length) {
                        const char = text.charAt(i);
                        const span = document.createElement('span');
                        span.textContent = char;
                        span.style.animation = 'fadeIn 0.5s forwards';
                        element.insertBefore(span, cursor);
                        i++;
                        setTimeout(type, speed);
                    } else {
                        resolve();
                    }
                }
                
                type();
            });
        }

        // When the page loads
        window.addEventListener('load', async () => {
            const title = document.getElementById('typingText');
            const subtext = document.getElementById('typingSubtext');
            const enterBtn = document.getElementById('closeIntro');
            
            // Type the main title
            await typeText(title, 'Happy Birthday My Love!', 150);
            
            // Type the subtext with a slight delay
            await new Promise(resolve => setTimeout(resolve, 500));
            await typeText(subtext, 'Today we celebrate you, the most amazing woman in my life. October 17th will always be the most special day 😍🥰🤌🏻🫂😩🫶🏻👀🫠', 50);
            
            // Show the enter button
            await new Promise(resolve => setTimeout(resolve, 500));
            enterBtn.style.opacity = '1';
        });