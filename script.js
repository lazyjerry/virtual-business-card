// Matrix effect
			const canvas = document.getElementById("matrix");
			const ctx = canvas.getContext("2d");

			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;

			const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
			const nums = "0123456789";
			const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
			const binary = "01";

			const alphabet = latin + nums + symbols + binary;

			const fontSize = 12;
			const columns = canvas.width / fontSize;

			const rainDrops = [];

			for (let x = 0; x < columns; x++) {
				rainDrops[x] = Math.random() * -50;
			}

			function draw() {
				ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
				ctx.fillRect(0, 0, canvas.width, canvas.height);

				ctx.fillStyle = "#0f0";
				ctx.font = fontSize + "px monospace";

				for (let i = 0; i < rainDrops.length; i++) {
					const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
					const opacity = Math.min(1, rainDrops[i] / 20);
					ctx.globalAlpha = opacity;
					ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

					if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
						rainDrops[i] = 0;
					}
					rainDrops[i]++;
				}

				requestAnimationFrame(draw);
			}

			// Terminal typing effect
			const terminalText = document.getElementById("typing-text");
			const commandLine = document.getElementById("command-line");
			const commandInput = document.getElementById("command-input");
			const terminalBody = document.getElementById("terminal-body");

			const messages = [
				{ text: "Booting system...", delay: 50 },
				{ text: "██████████████ 100%", delay: 30, style: "color: #0ff" },
				{ text: "\n", delay: 200 },
				{
					text: "> Welcome to SHU-HSIEN LIN's CYBER TERMINAL // ACCESS GRANTED",
					delay: 10,
					style: "color: #0f0; font-weight: bold",
				},
				{ text: "\n\n", delay: 100 },
				{ text: ">> USER PROFILE <<", delay: 10, style: "color: #b19cd9; text-decoration: underline" },
				{ text: "\n", delay: 100 },
				{ text: "> NAME: ", delay: 20 },
				{ text: "SHU-HSIEN LIN (Jerry)", delay: 100, style: "color: #0ff; font-weight: bold" },
				{ text: "\n", delay: 50 },
				{ text: "> TITLE: ", delay: 20 },
				{ text: "CREATIVE TECHNOLOGIST & DEVELOPER", delay: 50, style: "color: #0ff" },
				{ text: "\n", delay: 50 },
				{ text: "> LOCATION: ", delay: 20 },
				{ text: "TAIPEI, TAIWAN", delay: 70, style: "color: #0ff" },
				{ text: "\n", delay: 50 },
				{ text: "> STATUS: ", delay: 20 },
				{ text: "ACTIVE // SECURITY CLEARANCE: ALPHA", delay: 50, style: "color: #0f0" },
				{ text: "\n\n", delay: 100 },
				{ text: ">> SKILL MATRIX <<", delay: 10, style: "color: #b19cd9; text-decoration: underline" },
				{ text: "\n", delay: 100 },
				{ text: "> FRONTEND DEVELOPMENT: ", delay: 20 },
				{ text: "███████▌ 70%", delay: 30, style: "color: #0ff" },
				{ text: "\n", delay: 50 },
				{ text: "> UI/UX DESIGN: ", delay: 20 },
				{ text: "████▌ 40%", delay: 30, style: "color: #0ff" },
				{ text: "\n", delay: 50 },
				{ text: "> BACKEND DEVELOPMENT: ", delay: 20 },
				{ text: "█████████▉ 95%", delay: 30, style: "color: #0ff" },
				{ text: "\n", delay: 50 },
				{ text: "> SYSTEM DESIGN: ", delay: 20 },
				{ text: "████████▊ 80%", delay: 30, style: "color: #0ff" },
				{ text: "\n", delay: 50 },
				{ text: "> TECHNOLOGY PLANNING: ", delay: 20 },
				{ text: "██████▍ 85%", delay: 30, style: "color: #0ff" },
				{ text: "\n\n", delay: 100 },
				{
					html: `<div class="glass-effect">
                    <div class="flex items-center">
                        <span class="status-indicator"></span>
                        <span class="text-green-400 ml-2">TECH STACK & SERVICES:</span>
                    </div>
                    <div class="tech-stack">
                        <span class="tech-item">Debian</span>
                        <span class="tech-item">CentOS</span>
                        <span class="tech-item">Nginx</span>
                        <span class="tech-item">MariaDB</span>
                        <span class="tech-item">PHP</span>
                        <span class="tech-item">Python</span>
                        <span class="tech-item">Bootstrap</span>
                        <span class="tech-item">WordPress</span>
                        <span class="tech-item">CodeIgniter</span>
                        <span class="tech-item">Flask</span>
                        <span class="tech-item">Swift</span>
                        <span class="tech-item">Objective-C</span>
                        <span class="tech-item">Java</span>
                        <span class="tech-item">Linode</span>
                        <span class="tech-item">Vultr</span>
                        <span class="tech-item">AWS</span>
                        <span class="tech-item">阿里雲</span>
                        <span class="tech-item">Azure</span>
                        <span class="tech-item">HostGator</span>
                    </div>
                </div>`,
					delay: 50,
				},
				{ text: "\n\n", delay: 100 },
				{ text: ">> PROJECT HIGHLIGHTS <<", delay: 10, style: "color: #b19cd9; text-decoration: underline" },
				{ text: "\n", delay: 100 },
				{
					html: `<div class="project-card">
                    <div class="project-year">[2011-2025]</div>
                    <div class="project-title">LATEST CREATIVE PROJECTS</div>
                    <div class="project-desc">Explore my most recent creative technology projects and interactive installations.</div>
                    <div>
                        <span class="tag">Interactive</span>
                        <span class="tag">Generative</span>
                        <span class="tag">Immersive</span>
                    </div>
                    <a href="https://www.cake.me/shu-hsien-lin#projects" target="_blank" class="btn-primary">
                        <i class="fas fa-external-link-alt mr-2"></i>View Portfolio on Cake.me
                    </a>
                </div>`,
					delay: 50,
				},
				{ text: "\n\n", delay: 100 },
				{ text: ">> CONNECT <<", delay: 10, style: "color: #b19cd9; text-decoration: underline" },
				{ text: "\n", delay: 100 },
				{
					html: `<div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <a class="ml-2" href="mailto:service@crazyjerry.studio">service@crazyjerry.studio</a>
                </div>`,
					delay: 30,
				},
				{
					html: `<div class="contact-item">
                    <i class="fab fa-linkedin"></i>
                    <a class="ml-2" href="https://tw.linkedin.com/in/%E6%9B%B8%E8%B3%A2-%E6%9E%97-609169ab" target="_blank">LinkedIn Profile</a>
                </div>`,
					delay: 30,
				},
				{ text: "\n", delay: 50 },
				{
					html: `<div class="social-links">
                    <a href="https://linktr.ee/crazyjerry" target="_blank" class="btn-primary">
                        <i class="fas fa-link mr-2"></i>All Social Links
                    </a>
                    <a href="https://crazyjerry.studio/" target="_blank" class="btn-primary">
                        <i class="fas fa-home mr-2"></i>Personal Website
                    </a>
                    <a href="https://www.instagram.com/_jerry_lin/" target="_blank" class="btn-primary">
                        <i class="fab fa-instagram mr-2"></i>Instagram
                    </a>
                </div>`,
					delay: 30,
				},
				{ text: "\n\n", delay: 100 },
				{ text: "> Type 'help' for available commands", delay: 30, style: "color: #0f0" },
				{ text: "\n", delay: 50 },
			];

			let currentMessageIndex = 0;
			let currentCharIndex = 0;
			let isTyping = true;

			function typeNextCharacter() {
				if (currentMessageIndex >= messages.length) {
					isTyping = false;
					commandLine.classList.remove("hidden");
					commandInput.focus();
					return;
				}

				const currentMessage = messages[currentMessageIndex];

				if (currentMessage.html) {
					terminalText.innerHTML += currentMessage.html;
					currentMessageIndex++;
					setTimeout(typeNextCharacter, currentMessage.delay);
					return;
				}

				const textToType = currentMessage.text;

				if (currentCharIndex < textToType.length) {
					const char = textToType.charAt(currentCharIndex);
					const span = document.createElement("span");
					span.textContent = char;

					if (currentMessage.style) {
						span.style = currentMessage.style;
					}

					terminalText.appendChild(span);
					currentCharIndex++;

					setTimeout(typeNextCharacter, currentMessage.delay);
				} else {
					currentMessageIndex++;
					currentCharIndex = 0;
					setTimeout(typeNextCharacter, 100);
				}
			}

			function processCommand(command) {
				terminalText.appendChild(document.createElement("br"));

				const prompt = document.createElement("span");
				prompt.textContent = "> ";
				prompt.style.color = "#0f0";
				terminalText.appendChild(prompt);

				const cmdText = document.createElement("span");
				cmdText.textContent = command;
				cmdText.style.color = "#e0e0e0";
				terminalText.appendChild(cmdText);

				terminalText.appendChild(document.createElement("br"));

				const response = document.createElement("div");
				response.style.marginTop = "10px";

				command = command.toLowerCase().trim();

				if (command === "help") {
					response.innerHTML = `<div class="glass-effect">
                    <div class="flex items-center mb-2">
                        <span class="status-indicator"></span>
                        <span class="text-green-400">AVAILABLE COMMANDS</span>
                    </div>
                    <div class="grid grid-cols-2 gap-2 mt-3">
                        <div><span class="highlight">about</span> - Show detailed profile</div>
                        <div><span class="highlight">skills</span> - List technical skills</div>
                        <div><span class="highlight">projects</span> - Show project portfolio</div>
                        <div><span class="highlight">contact</span> - Contact information</div>
                        <div><span class="highlight">social</span> - Social media links</div>
                        <div><span class="highlight">clear</span> - Clear the terminal</div>
                    </div>
                </div>`;
				} else if (command === "about") {
					response.innerHTML = `<div class="glass-effect">
                    <div class="flex items-center mb-2">
                        <span class="status-indicator"></span>
                        <span class="text-green-400">USER PROFILE DETAILS</span>
                    </div>
                    <p class="mt-3">
                        <span class="text-cyan-400">我是一位來自台灣的全端工程師，擁有近十年的開發與專案實戰經驗，喜歡把腦中的點子落實成能解決問題、帶來體驗的作品。</span>
                        <br>
                        熟悉 Web 與 App 的全端開發，能獨立完成從前端 UI 切版、API 串接、資料庫設計，到 DevOps、CI/CD、自動化部署等流程。平時熱衷於研究開源技術與工具，在 GitHub 上持續實驗新概念；在 Blog 分享開發心得、框架筆記與技術觀察；也會在 Instagram 留下一些生活與創作的側寫。對我來說，程式設計不只是工作，而是一種持續探索與表達的方式。
                    </p>
                    <hr class="border-t border-gray-700 my-4">
                    <p class="mt-3">
                        <span class="text-cyan-400">I'm a full-stack engineer from Taiwan with nearly 10 years of hands-on experience in development and project execution.</span>
                        <br>
                        I enjoy turning ideas into practical, impactful products—whether it's through crafting UIs, designing APIs, building databases, or setting up CI/CD pipelines and automated deployments.I'm passionate about learning and applying new technologies, and I regularly explore open-source experiments on GitHub, write about development and frameworks on my Blog, and share bits of life and creativity on Instagram.For me, coding isn't just work—it's a tool for expression, experimentation, and continuous growth.
                    </p>
                    <div class="mt-4 tech-stack">
                        <span class="tag">Full-Stack Development</span>
                        <span class="tag">Web & Mobile</span>
                        <span class="tag">DevOps</span>
                        <span class="tag">Open Source</span>
                        <span class="tag">Creative Coding</span>
                    </div>
                </div>`;
				} else if (command === "skills") {
					response.innerHTML = `<div class="glass-effect">
                    <div class="flex items-center mb-2">
                        <span class="status-indicator"></span>
                        <span class="text-green-400">TECHNICAL PROFICIENCY</span>
                    </div>
                    <div class="mt-3">
                        <div class="skill-bar">
                            <span class="skill-name">Frontend Development</span>
                            <span class="skill-level" style="width: 70%"></span>
                        </div>
                        <div class="skill-bar">
                            <span class="skill-name">UI/UX Design</span>
                            <span class="skill-level" style="width: 40%"></span>
                        </div>
                        <div class="skill-bar">
                            <span class="skill-name">Backend Development</span>
                            <span class="skill-level" style="width: 90%"></span>
                        </div>
                        <div class="skill-bar">
                            <span class="skill-name">Interactive Installations</span>
                           	<span class="skill-level" style="width: 80%"></span>
                        </div>
                        <div class="skill-bar">
                            <span class="skill-name">Motion Design</span>
                            <span class="skill-level" style="width: 65%"></span>
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="flex items-center">
                            <span class="status-indicator"></span>
                            <span class="text-green-400 ml-2">TECH STACK & SERVICES:</span>
                        </div>
                        <div class="tech-stack mt-2">
                            <span class="tech-item">Debian</span>
                            <span class="tech-item">CentOS</span>
                            <span class="tech-item">Nginx</span>
                            <span class="tech-item">MariaDB</span>
                            <span class="tech-item">PHP</span>
                            <span class="tech-item">Python</span>
                            <span class="tech-item">Bootstrap</span>
                            <span class="tech-item">WordPress</span>
                            <span class="tech-item">CodeIgniter</span>
                            <span class="tech-item">Flask</span>
                            <span class="tech-item">Swift</span>
                            <span class="tech-item">Objective-C</span>
                            <span class="tech-item">Java</span>
                            <span class="tech-item">Linode</span>
                            <span class="tech-item">Vultr</span>
                            <span class="tech-item">AWS</span>
                            <span class="tech-item">阿里雲</span>
                            <span class="tech-item">Azure</span>
                            <span class="tech-item">HostGator</span>
                        </div>
                    </div>
                </div>`;
				} else if (command === "projects") {
					response.innerHTML = `<div class="glass-effect">
                    <div class="flex items-center mb-2">
                        <span class="status-indicator"></span>
                        <span class="text-green-400">PROJECT PORTFOLIO</span>
                    </div>
                    <div class="mt-3">
                        <div class="project-card">
                            <div class="project-year">[2025]</div>
                            <div class="project-title">LATEST CREATIVE PROJECTS</div>
                            <div class="project-desc">Explore my most recent creative technology projects and interactive installations.</div>
                            <div>
                                <span class="tag">Interactive</span>
                                <span class="tag">Generative</span>
                                <span class="tag">Immersive</span>
                            </div>
                            <a href="https://www.cake.me/shu-hsien-lin#projects" target="_blank" class="btn-primary">
                                <i class="fas fa-external-link-alt mr-2"></i>View Portfolio on Cake.me
                            </a>
                        </div>
                    </div>
                </div>`;
				} else if (command === "contact") {
					response.innerHTML = `<div class="glass-effect">
                    <div class="flex items-center mb-2">
                        <span class="status-indicator"></span>
                        <span class="text-green-400">CONTACT CHANNELS:</span>
                    </div>
                    <div class="mt-3">
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <a href="mailto:service@crazyjerry.studio">service@crazyjerry.studio</a>
                        </div>
                        <div class="contact-item">
                            <i class="fab fa-linkedin"></i>
                            <a href="https://tw.linkedin.com/in/%E6%9B%B8%E8%B3%A2-%E6%9E%97-609169ab" target="_blank">LinkedIn Profile</a>
                        </div>
                    </div>
                </div>`;
				} else if (command === "social") {
					response.innerHTML = `<div class="glass-effect">
                    <div class="flex items-center mb-2">
                        <span class="status-indicator"></span>
                        <span class="text-green-400">SOCIAL NETWORKS:</span>
                    </div>
                    <div class="mt-3">
                        <div class="flex flex-wrap gap-2">
                            <a href="https://linktr.ee/crazyjerry" target="_blank" class="btn-primary">
                                <i class="fas fa-link mr-2"></i>All Social Links
                            </a>
                            <a href="https://blog.jerryzheli.com/" target="_blank" class="btn-primary">
                                <i class="fas fa-home mr-2"></i>Personal Website
                            </a>
                            <a href="https://www.instagram.com/_jerry_lin/" target="_blank" class="btn-primary">
                                <i class="fab fa-instagram mr-2"></i>Instagram
                            </a>
                        </div>
                    </div>
                </div>`;
				} else if (command === "clear") {
					terminalText.innerHTML = "";
					commandInput.value = "";
					return;
				} else if (command === "exit") {
					response.innerHTML = `<span style="color: #f44">Access Denied: Terminal cannot be closed from this session.</span>`;
				} else {
					response.innerHTML = `<div class="glass-effect">
                    <span style="color: #f44">Command not found: ${command}</span><br>
                    Type <span class="highlight">'help'</span> for available commands.
                </div>`;
				}

				let isAlreadyAtBottom = terminalBody.scrollTop > terminalBody.scrollHeight - terminalBody.clientHeight - 100;
				console.log("isAlreadyAtBottom", isAlreadyAtBottom);

				terminalText.appendChild(response);
				terminalText.appendChild(document.createElement("br"));

				// Scroll to show the new content and keep the command line visible
				setTimeout(() => {
					if (isAlreadyAtBottom) {
						terminalBody.scrollBy({
							top: 200,
							behavior: "smooth",
						});
					} else {
						terminalBody.scrollTo({
							top: terminalBody.scrollHeight,
							behavior: "smooth",
						});
					}
				}, 50);
			}

			commandInput.addEventListener("keydown", function (e) {
				if (e.key === "Enter") {
					const command = this.value;
					this.value = "";

					if (command.trim() !== "") {
						processCommand(command);
					}
				}
			});

			function minimizeTerminal() {
				const terminal = document.querySelector(".terminal-container");
				terminal.style.transform = "translateY(calc(100vh - 50px)) scale(0.8)";
				terminal.style.opacity = "0.7";
				setTimeout(() => {
					terminal.style.width = "300px";
					terminal.style.height = "36px";
				}, 300);
			}

			function maximizeTerminal() {
				const terminal = document.querySelector(".terminal-container");
				terminal.style.width = "90%";
				terminal.style.height = "80vh";
				setTimeout(() => {
					terminal.style.transform = "";
					terminal.style.opacity = "";
				}, 300);
			}

			function closeTerminal() {
				const terminal = document.querySelector(".terminal-container");
				terminal.style.transform = "scale(0)";
				terminal.style.opacity = "0";
				setTimeout(() => {
					document.body.innerHTML =
						'<div class="text-green-500 text-center text-2xl">Session terminated. Refresh to restart.</div>';
				}, 500);
			}

			// Start animations
			window.addEventListener("load", function () {
				draw();
				typeNextCharacter();
			});

			window.addEventListener("resize", function () {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			});