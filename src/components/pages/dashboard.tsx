
import { useState } from 'react'

import { CreateContentModal } from '../../components/CreateContentModal'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { PlusIcon } from '../../icons/PlusIcon'
import { ShareIcon } from '../../icons/ShareIcon'
import { SideBar } from '../../components/Sidebar'

import { useContent } from '../../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../../config'


export const DashBoard = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const { contents } = useContent();

    async function shareContent() {
        const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
            status: true
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        const shareUrl = `${window.location.origin}share/${response.data.hash}`;
        navigator.clipboard.writeText(shareUrl);
        alert("Share link is copied to clipboard");
    }

    return (
        <div>
            <SideBar />
            <div className='p-4 ml-59 bg-gradient-to-r from-violet-300 to-orange-300 min-h-screen'>
                <CreateContentModal open={modalOpen} onClose={() => {
                    setModalOpen(false);
                }} />

                <div className='flex justify-end gap-4'>
                    <Button onClick={shareContent} variant="secondary" size="md" text="Share Brain" startIcon={ShareIcon} />
                    <Button onClick={() => setModalOpen(true)} variant="primary" size="md" text="Add Content" startIcon={PlusIcon} />
                </div>
                <div className='grid grid-cols-3 gap-6 mt-6'>
                    {contents.map((cont, index) => (
                        <Card
                            key={index}
                            _id={cont._id}
                            title={cont.title}
                            link={cont.link}
                            type={cont.type}

                        />
                    ))}
                </div>
            </div>
        </div>
    )
}