import { useState } from "react";

const Chat = () => {
    const [activeTab, setActiveTab] = useState("bot");

    const tabs = [
        { id: "bot", label: "Bot" },
        { id: "chat", label: "Chat" },
        { id: "colors", label: "Colors" },
        { id: "widget", label: "Widget" },
        { id: "integration", label: "Integration" }
    ];

    return (
        <div>
        {/* Tabs */}
        <div style={{
            display: "flex",
            gap: 20,
            borderBottom: "1px solid #eee",
            marginBottom: 20
        }}>
            {tabs.map(tab => (
            <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                padding: "10px 15px",
                border: "none",
                borderBottom: activeTab === tab.id ? "2px solid black" : "none",
                background: "transparent",
                cursor: "pointer",
                fontWeight: activeTab === tab.id ? "bold" : "normal"
                }}
            >
                {tab.label}
            </button>
            ))}
        </div>

        {/* Layout */}
        <div style={{
            display: "flex",
            gap: 40
        }}>
            
            {/* LEFT — Chat Preview */}
            <div style={{
            width: 300,
            height: 500,
            border: "1px solid #ddd",
            borderRadius: 20,
            padding: 15,
            background: "#f9f9f9",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
            }}>
            <div>
                <b>Mandary</b>
            </div>

            <div style={{
                marginTop: 20,
                fontSize: 14,
                color: "#888"
            }}>
                Chat preview...
            </div>

            <input
                placeholder="Type a message..."
                style={{
                marginTop: 20,
                padding: 10,
                borderRadius: 10,
                border: "1px solid #ddd"
                }}
            />
            </div>

            {/* RIGHT — Settings Panel */}
            <div style={{
            flex: 1,
            border: "1px solid #eee",
            borderRadius: 10,
            padding: 20
            }}>
            {activeTab === "bot" && (
                <div>
                <h3>Your Bot</h3>
                <input
                    placeholder="Bot name"
                    style={{ width: "100%", padding: 10, marginBottom: 10 }}
                />

                <label>
                    <input type="checkbox" /> Enable Bot
                </label>
                </div>
            )}

            {activeTab === "chat" && (
                <div>
                <h3>Chat Settings</h3>
                <p>Customize chat behavior</p>
                </div>
            )}

            {activeTab === "colors" && (
                <div>
                <h3>Colors</h3>
                <p>Customize UI colors</p>
                </div>
            )}

            {activeTab === "widget" && (
                <div>
                <h3>Widget</h3>
                <p>Customize widget button</p>
                </div>
            )}

            {activeTab === "integration" && (
                <div>
                <h3>Integration</h3>
                <textarea
                    style={{ width: "100%", height: 120 }}
                    value={`<script src="https://yourapp.com/embed.js"></script>`}
                    readOnly
                />
                </div>
            )}
            </div>
        </div>
        </div>
    );
    };

export default Chat;